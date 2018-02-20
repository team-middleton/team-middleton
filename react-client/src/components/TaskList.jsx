import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks = []
    }
  }

  componentDidMount() {
    axios.get('/tasks', {
      params: {
        user: this.props.user
      }
    })
    .then((response) => {

    })
    .catch((err) => {
      console.error(err)
    })
  }

  addTask(user, task) {
    axios.post('/tasks', {
      user: user,
      task: task,
      cost: 0,
      complete: false
    })
    .then((response) => {

    })
    .catch((err) => {
      console.error(err)
    })
  }

  removeTask(user, task) {
    axios.delete('/tasks', {
      params: {
        user: user,
        task: task
      }
    })
    .then((response) => {

    })
    .catch((err) => {
      console.error(err)
    })
  }

  markCompleted(user, task) {
    axios.post('/checklist', {
      user: user,
      task: task
    })
  }

  assignCost(task, cost) {
    axios.post('/budget', {
      task: task,
      cost: cost
    })
    .then((response) => {

    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    
  }
}