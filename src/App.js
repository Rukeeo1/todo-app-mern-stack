import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import "boostrap/dist/css/boostrap.min.css"

function App() {
  return (
    <Router>
      <div className="container">
        <h2 className="btn btn-danger">MERN - Stack Todo App</h2>
      </div>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </Router>
  );
}

export default App;
