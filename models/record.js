const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: String,
  category: Object,
  date: String,
  amount: Number
})
module.exports = mongoose.model('Record', recordSchema)