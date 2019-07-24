const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const PORT = 3000;
//server.js is my root file where everything leaves..

const { TodoModel } = require('./todo.model');

app.use(cors()); //enable cors
app.use(bodyParser.json()); //body parser

//connect to mongo db....
mongoose
  .connect('mongodb://localhost/todos-mern-stack')
  .then(() => {
    console.log('connected to mongo db');
  })
  .catch(err => {
    console.log(err.message);
  }); //connect to local host

router.get('/', (req, res) => {
  TodoModel.find((err, todos) => {
    if (err) throw err;
    res.json(todos);
  });
});

router.get('/:id', (req, res) => {
  TodoModel.findById(req.params.id, (err, todos) => {
    if (err) return res.status(404).json('contact not found');
    res.json(todos);
  });
});

router.post('/', async (req, res) => {
  let todo = new TodoModel(req.body);
  try {
    todo = await todo.save();
    res.send(todo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put('/:id', (req, res) => {
  TodoModel.findById(req.params.id, (err, todo) => {
    if (err) {
     return res.status(404).send('data is not found');
    } else {
      todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_completed = req.body.todo_completed;

      todo
        .save()
        .then(todo => {
          res.json('Todo upated');
        })
        .catch(err => {
          res.status(400).send('update not possible');
        });
    }
  });
});

app.use('/todos', router);

//listen on port 3000...
app.listen(PORT, function() {
  console.log('Sever is Running on Port ' + PORT);
});
