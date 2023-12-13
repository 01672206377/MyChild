const Service = require('../../models/service')
const { mutipleMongooseToObject, mongooseToObject } = require('../../../util/mongoose')

class clientServiceController{
    getBaby(req, res, next){
        Service.find({ typeService: 'baby'})
            .then(service => {
                res.render('client/babyService', {
                    service: mutipleMongooseToObject(service)
                })
            })
            .catch(next)
    }

    getMother(req, res, next){
        Service.find({ typeService: 'mother'})
            .then(service => {
                res.render('client/motherService', {
                    service: mutipleMongooseToObject(service)
                })
            })
            .catch(next)
    }   

    show(req, res, next){
        Service.findOne({ slug: req.params.slug})
            .then(service => {
                const imagePath = `/uploads/${service.avatar.split('\\uploads\\')[1]}`;
                const serviceData = {
                    name: service.name,
                    description: service.description,
                    price: service.price,
                    typeService: service.typeService,
                    totalSession: service.totalSession,
                    timeSession: service.timeSession,
                    implementer: service.implementer,
                    avatar: imagePath,
                }; 
                res.render('client/showDetail', {service: serviceData})
            })
            .catch(next)
    }
}

module.exports = new clientServiceController