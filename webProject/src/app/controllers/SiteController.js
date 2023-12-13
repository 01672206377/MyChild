const Service = require('../models/service')
const Doctor = require('../models/doctors')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class SiteController{

    index(req, res, next){
        res.render('home')
    }

    showDoctor(req, res, next){
        Doctor.find({})
            .then(doctors => {
                const doctorData = doctors.map(doctor => {
                    const imagePath = `/uploads/${doctor.avatar.split('\\uploads\\')[1]}`;
                    return {
                        name: doctor.name,
                        description: doctor.description,
                        avatar: imagePath,
                    }; 
                })
                
                res.render('home', {doctor: doctorData})
            })
            .catch(next)
    }

}

module.exports = new SiteController