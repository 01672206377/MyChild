const Consultant = require('../../models/consultants')
const { mutipleMongooseToObject, mongooseToObject } = require('../../../util/mongoose')

class ConsultantController{

    //[GET] /admin/listDoctor
    list(req, res, next){
        Consultant.find({})
            .then(consultant => {
                res.render('admin/consultantView/consultantList', {
                    consultant: mutipleMongooseToObject(consultant)
                })
            })
            .catch(next)
    }

    getCreate(req, res, next){
        res.render('admin/consultantView/createConsultant')
    }

    postCreate(req, res, next){
        console.log(req.file)
        const consultant = new Consultant({
            name: req.body.name,
            description: req.body.description,
        })
        if(req.file){
            consultant.avatar = req.file.path
        }
        consultant.save()
            .then(() => res.redirect('/admin/consultant/listConsultant'))
            .catch(next);
    }

    edit(req, res, next){
        Consultant.findById(req.params.id)
            .then(consultant => res.render('admin/consultantView/editConsultant', {
                consultant: mongooseToObject(consultant)
            }))
            .catch(next)
    }

    update(req, res, next){
        Consultant.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/consultant/listConsultant'))
            .catch(next)
    }

    delete(req, res, next){
        Consultant.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    
}

module.exports = new ConsultantController