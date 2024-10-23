const express = require('express')
const app = express()
const mongoose=require('mongoose');
mongoose.connect('mongodb://jlt-phi.vercel.app:27017/DB',()=>{
   console.log('database connected');
    
})
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000);