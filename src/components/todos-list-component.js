import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = (
  props //this is functional component...
) => (
  <tr>
    <td className={props.todo.todo_completed ? 'completed' :''}>{props.todo.todo_description}</td>
    <td className={props.todo.todo_completed ? 'completed' :''} >{props.todo.todo_responsible}</td>
    <td className={props.todo.todo_completed ? 'completed' :''} >{props.todo.todo_priority}.</td>
    <td>
      <Link to={'/edit/' + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: [] };
  }
  componentDidMount() {
    //when component mounts do this...
    //fetch data and set state
    //react components acces stuff from their state...
    axios
      .get('http://localhost:3000/todos')
      .then(response => {
        this.setState({ todo: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(){
    axios
    .get('http://localhost:3000/todos')
    .then(response => {
      this.setState({ todo: response.data });
    })
    .catch(error => {
      console.log(error);
    });
  }

  todoList() {
    //this is a function...
    //the function loops throught the todo list...
    //and returns a todo functional component at each loop
    //it passes a prop at each time
    //the prop is an object of the current to do...
    return this.state.todo.map((currentTodo, index) => {
      return <Todo todo={currentTodo} key={index} />;
    });
  }
  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>response</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}
export default TodoList;
