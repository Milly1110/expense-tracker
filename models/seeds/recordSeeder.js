const db = require('../../config/mongoose')
const Record = require('../record')
// const recordList = require('./record.json')
const category = require('./categorySeeder')

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 3; i++) {
    Record.create({ name: 'name-' + i, category: category, date: '2020/4/1', amount: 300 })
  }
  console.log('done')
})
