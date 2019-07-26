const express = require('express');
const router = express.Router();
const TodoModel = require('../todo.model');

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
    res.status(200).json({ data: todo });
  } catch {
    res.status(400).json({ error: 'An error occured' });
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

module.exports = router;
