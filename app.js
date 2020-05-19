const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaulyLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

mongoose.connect('mongodb://localhost/record-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})