const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3000;

app.use(cors());//enable cors
app.use(bodyParser.json());//body parser

//connect to mongo db....
mongoose.connect('mongodb://localhost/todos-mern-stack').then(()=>{
  console.log('connected to mongo db')
}).catch((err) => {
  console.log(err.message)
});//connect to local host

//listen on port 3000...
app.listen(PORT, function() {
  console.log('Sever is Running on Port ' + PORT);
});
