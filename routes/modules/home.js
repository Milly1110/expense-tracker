const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
//read all record
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.log(error))
})
module.exports = router