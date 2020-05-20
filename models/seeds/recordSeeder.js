const mongoose = require('mongoose')
const Record = require('../record')
// const recordList = require('./record.json')
const category = require('./categorySeeder')

mongoose.connect('mongodb://localhost/record-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
// db.once('open', () => {
//   console.log('mongodb connected!')
//   for (let i = 0; i < recordList.results.length; i++) {
//     Record.create(recordList.results[i])
//   }
//   console.log('done')
// })

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 3; i++) {
    Record.create({ name: 'name-' + i, category: category, date: '2020/4/1', amount: 300 })
  }
  console.log('done')
})
