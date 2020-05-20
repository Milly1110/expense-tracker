const express = require('express')
const router = express.Router()
const Record = require('../../models/record')


//create new record
router.get('/new', (req, res) => {
  return res.render('new')
})
router.post('/', (req, res) => {
  const { name, category, date, amount } = req.body
  return Record.create(req.body)
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