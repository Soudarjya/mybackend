const express = require('express')
const app = express()
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/DB')
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000);