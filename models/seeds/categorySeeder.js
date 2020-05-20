const mongoose = require('mongoose')
const Record = require('../record')


mongoose.connect('mongodb://localhost/record-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  Record.create({ category: ['home', 'trafic', 'entertainment', 'food', 'others'] })
  console.log('done')
})