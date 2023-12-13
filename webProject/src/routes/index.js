
const siteRouter = require('./site')
const adminRouter = require('./admin/adminIndex')
const clientRouter = require('./client/clientIndex')

function route(app){
    app.use('/admin', adminRouter)
    app.use('/client', clientRouter)
    app.use('/', siteRouter)
}

module.exports = route