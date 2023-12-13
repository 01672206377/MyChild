const Service = require('../../models/service')
const { mutipleMongooseToObject, mongooseToObject } = require('../../../util/mongoose')

class AdminController{

    //[GET] /admin/listService
    listService(req, res, next){
        Service.find({})
            .then(service => {
                res.render('admin/service/serviceList', {
                    service: mutipleMongooseToObject(service)
                })
            })
            .catch(next)
    }

    //[GET] /admin/getCreateService
    getCreateService(req, res) { 
        res.render('admin/service/createService')
    }

    //[POST] /admin/postCreateService
    postCreateService(req, res, next){
        console.log(req.file)
        const service = new Service({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            typeService: req.body.typeService,
            timeSession: req.body.timeSession,
            totalSession: req.body.totalSession,
            implementer: req.body.implementer,
        })
        if(req.file){
            service.avatar = req.file.path
        }
        service.save()
            .then(() => res.redirect('/admin/service/listService'))
            .catch(next);
    }

    //[GET] /admin/:id/editService
    editService(req, res, next){
        Service.findById(req.params.id)
            .then(service => res.render('admin/service/editService', {
                service: mongooseToObject(service)
            }))
            .catch(next)
    }

    //[PUT] /admin/:id
    updateService(req, res, next){
        Service.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/service/listService'))
            .catch(next)
    }

    //[DELETE] /admin/:id
    deleteService(req, res, next){
        Service.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new AdminController