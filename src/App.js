import React from 'react';
import TodosList from './components/todos-list-component';
import EditTodo from './components/edit-list-component';
import CreateTodo from './components/create-todo-component';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';


// import "boostrap/dist/css/boostrap.min.css"

function App() {
  return (
  
    <Router>
        {/* <Button/> */}
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="nav-brand" href="https://google.com" target="_blank">
            <img src={logo} width="30" height="30" alt="site logo" />
          </a>
          <Link to="/" className="navbar-brand">
            MERN - Stack Todo App
          </Link>
          <Link to="/" className="nav-link">
            Todos
          </Link>
          <Link to="/create" className="nav-link">
            Create Todo
          </Link>
     

          {/* <div className="collapse nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              gggg
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link btn btn-danger">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div> */}
        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
