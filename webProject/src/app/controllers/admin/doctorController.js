const Doctor = require('../../models/doctors')
const { mutipleMongooseToObject, mongooseToObject } = require('../../../util/mongoose')

class DoctorsController{

    //[GET] /admin/listDoctor
    list(req, res, next){
        Doctor.find({})
            .then(doctor => {
                res.render('admin/doctorView/doctorList', {
                    doctor: mutipleMongooseToObject(doctor)
                })
            })
            .catch(next)
    }

    getCreate(req, res, next){
        res.render('admin/doctorView/createDoctor')
    }

    postCreate(req, res, next){
        console.log(req.file)
        const doctor = new Doctor({
            name: req.body.name,
            description: req.body.description,
        })
        if(req.file){
            doctor.avatar = req.file.path
        }
        doctor.save()
            .then(() => res.redirect('/admin/doctor/listDoctor'))
            .catch(next);
    }

    edit(req, res, next){
        Doctor.findById(req.params.id)
            .then(doctor => res.render('admin/doctorView/editDoctor', {
                doctor: mongooseToObject(doctor)
            }))
            .catch(next)
    }

    update(req, res, next){
        Doctor.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/doctor/listDoctor'))
            .catch(next)
    }

    delete(req, res, next){
        Doctor.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    
}

module.exports = new DoctorsController