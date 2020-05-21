const db = require('../../config/mongoose')
const Record = require('../record')
const recordList = require('./record.json')


db.once('open', () => {
  console.log('mongodb connected!')
  const promise = []

  for (let i = 0; i < recordList.results.length; i++) {
    promise.push(Record.create(recordList.results[i]))
  }
  Promise.all(promise).then(() => {
    console.log('done')
    db.close()
  })

})


