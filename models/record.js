const mongoose = require('mongoose')
const schema = mongoose.Schema
const recordSchema = new Schema({
  name: String,
  category: String,
  date: String,
  amount: Number
})
module.exports = mongoose.model('Record', recordSchema)