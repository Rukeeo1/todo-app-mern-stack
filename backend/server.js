const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/route');
const PORT = process.env.PORT || 3000; //make heroku choose what ever option it has
const path = require('path')
// const todoRouter = require('./routes/route');

app.use(cors()); //enable cors
app.use(bodyParser.json()); //body parser
//mongodb+srv://rukee-todo-mern:<password>@cluster0-vebe6.mongodb.net/test?retryWrites=true&w=majority

//connect to mongo db....
mongoose
  .connect('mongodb+srv://rukee-todo-mern:552377@cluster0-vebe6.mongodb.net/test?retryWrites=true&w=majority'|| 'mongodb://localhost/todos-mern-stack')
  .then(() => {
    console.log('connected to mongo db');
  })
  .catch(err => {
    console.log(err.message);
  }); //connect to local host

app.use('/todos', router);

if (process.env.NODE_ENV === 'production') {
  //client/
  app.use(express.static(path.join(__dirname, '../', 'build')));
  app.get('*', (req, res) => {
    res.send(path.join(__dirname, '../', 'build/index.html'));
  });
}

//listen on port 3000...
app.listen(PORT, function() {
  console.log('Sever is Running on Port ' + PORT);
});
