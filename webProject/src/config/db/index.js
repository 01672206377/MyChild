const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/MyChild', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect Successfully!!!')
    } catch (error) {
        console.log('Connect failure!!!')   
    }
}

module.exports = { connect }