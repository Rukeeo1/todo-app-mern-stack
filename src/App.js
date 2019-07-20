import React from 'react';
import TodosList from './components/todos-list-component';
import EditTodo from './components/edit-list-component';
import CreateTodo from './components/create-todo-component';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import "boostrap/dist/css/boostrap.min.css"

function App() {
  return (
    <Router>
      <div className="container">
        <h2 className="btn btn-danger">MERN - Stack Todo App</h2>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
