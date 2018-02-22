import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Task from './Task.jsx';

class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      userInput: '',
      budget: '',
    }
  }

  componentDidMount() {
    this.refreshList()
  }

  refreshList() {
    axios.get('/tasks')
    .then((response) => {
      this.setState({tasks: response})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  addTask(event) {
    event.preventDefault()
    axios.post('/tasks', {
      task: this.state.userInput,
      cost: 0,
      complete: false
    })
    .then((response) => {
      this.refreshList()
    })
    .catch((err) => {
      console.error(err)
    })
  }

  removeTask(taskId) {
    axios.delete('/tasks', {
      params: {
        taskId: taskId
      }
    })
    .then((response) => {
      this.refreshList()
    })
    .catch((err) => {
      console.error(err)
    })
  }

  markCompleted(taskId) {
    axios.post('/checklist', {
      taskId: taskId
    })
    .then((response) => {
      this.refreshList()
    })
    .catch((err) => {
      console.error(err)
    })
  }

  assignCost(event, taskId, cost) {
    event.preventDefault()
    axios.post('/expenses', {
      taskId: taskId,
      cost: parseInt(cost)
    })
    .then((response) => {
      this.refreshList()
    })
    .catch((err) => {
      console.error(err)
    })
  }

  setBudget(event) {
    event.preventDefault()
    axios.post('/budget', {
      budget: this.state.budget
    })
    .then((response) => {
      this.getBudget()
    })
    .catch((err) => {
      console.error(err)
    })
  }

  getBudget() {
    axios.get('/budget')
    .then((response) => {
      this.setState({budget: response})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  calcTotal() {
    return this.state.tasks.reduce((acc, task) => {
      if (task.price) {
        acc += task.price
      }
      return acc
    }, 0)
  }

  render() {
    if (this.state.tasks.length > 0) {
      return (
        <div>
          <form>
            <input type="text" value={this.state.userInput} onChange={(event) => this.setState({userInput: event.target.value})}/>
            <button type="submit" onClick={(event) => {this.addTask(event)}}>Add Task</button>
          </form>
          <div>
            {this.state.tasks.map((task) => {
              <Task 
              id = {task.id}
              task = {task}
              removeTask = {this.removeTask}
              markCompleted = {this.markCompleted}
              assignCost = {this.assignCost}
              />
            })}
          </div>
          <div>{this.state.total}</div>
          <form>
            <input type="test" value={this.state.budget} onChange={(event) => this.setState({budget: event.target.value})}/>
            <button type="submit" onClick={(event) => this.setBudget(event)}>Input Budget</button>
          </form>
          <div>Difference: ${this.state.budget - this.calcTotal()}</div>
        </div>
      )
    } else {
      return (
        <div>Fetching your messages from our database...</div>
      )
    }
  }
}


export default TaskList;

