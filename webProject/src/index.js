const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

db.connect();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers:{
    sum: (a, b) => a+b,
    eq: (v1, v2) => v1 == v2
  }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app);

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})