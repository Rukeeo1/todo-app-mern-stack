import React, { Component } from 'react';
import { link } from 'react-router-dom';
import axios from 'axios';

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
        this.setState({ todos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <p>Welcome to to do list todoComponent</p>
      </div>
    );
  }
}
export default TodoList;
