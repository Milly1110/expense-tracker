const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
//read all record
router.get('/', (req, res) => {
  const filter = '全部支出'
  Record.find({ name: { $regex: '' } })
    .lean()
    .then(records => {
      let totalAmount = 0
      const promise = []
      for (let i = 0; i < records.length; i++) {
        promise.push(records[i])
        totalAmount += Number(promise[i].amount)
      }
      res.render('index', { records, totalAmount, filter })
    })
    .catch(error => console.log(error))
})
module.exports = router