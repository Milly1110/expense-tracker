const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

router.get('/category', (req, res) => {
  const filter = req.query.filter
  if (filter.length === 0) { return res.redirect('/') }
  Record.find({ category: `${req.query.filter}` })
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

// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   Record.findById(id)
//     .lean()
//     .then(record => { res.render('edit', { record }) })
//     .catch(error => console.log(error))
// })

//create new record
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  let { name, category, date, amount, categoryName, icon } = req.body
  Record.find({ categoryName: { $regex: '' } })
    .lean()
    .then(record => {
      promise = []
      for (let i = 0; i < record.length; i++) {
        promise.push(record[i])
        if (category === promise[i].categoryName) { req.body.icon = promise[i].icon }
      }
      return Record.create(req.body)
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
//update specified record
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then(record => res.render('edit', { record }))
    .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, category, date, amount } = req.body
  Record.find({ categoryName: req.body.category })
    .then(record => { req.body.icon = record[0].icon })
  return Record.findById(id)
    .then(record => {
      record = Object.assign(record, req.body)
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
//delete specified record
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router