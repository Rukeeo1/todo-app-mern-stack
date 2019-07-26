const mongoose = require('mongoose');
//our goal here  is to create a schema...we've already imported mongoose

let todoSchema = new mongoose.Schema({
  todo_description: {
    type: String
  },
  todo_responsible: {
    type: String
  },
  todo_priority: {
    type: String
  },
  todo_completed: {
    type: Boolean
  }
});


const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;

