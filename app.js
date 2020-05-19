const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('This is expense-tracker app.')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})