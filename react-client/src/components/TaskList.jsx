import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Task from './Task.jsx';

class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      taskInput: '',
      budgetInput: '',
      budget: ''
    }
  }

  componentDidMount() {
    this.refreshList()
    this.getBudget()
  }

  refreshList() {
    console.log('Page refreshed')
    axios.get('/tasks')
    .then((response) => {
      this.setState({tasks: response.data})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  addTask(event) {
    event.preventDefault()
    axios.post('/tasks', {
      task: this.state.taskInput,
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
    axios.post('/delete', {
        taskId: taskId
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
      budget: this.state.budgetInput
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
      console.log(response)
      this.setState({budget: response.data[0].totalbudget})
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
    
        <div className="tasks">
          <form>
            <input type="text" value={this.state.taskInput} onChange={(event) => this.setState({taskInput: event.target.value})}/>
            <button type="submit" onClick={(event) => {this.addTask(event)}}>Add Task</button>
          </form>
          <div>
            {this.state.tasks.map((task, index) => {
              return <Task 
              key = {index}
              id = {task.id}
              task = {task.task}
              cost = {task.price}
              checked = {task.complete}
              removeTask = {this.removeTask.bind(this)}
              markCompleted = {this.markCompleted.bind(this)}
              assignCost = {this.assignCost.bind(this)}
              />
            })}
          </div>
          <form>
            <input type="test" value={this.state.budgetInput} onChange={(event) => this.setState({budgetInput: event.target.value})}/>
            <button type="submit" onClick={(event) => this.setBudget(event)}>Input Budget</button>
          </form>
          <div>Difference: ${this.state.budget - this.calcTotal()}</div>
        </div>
      )
    } else {
      return (
        <div className="tasks">
          <form>
            <input type="text" value={this.state.taskInput} onChange={(event) => this.setState({taskInput: event.target.value})}/>
            <button type="submit" onClick={(event) => {this.addTask(event)}}>Add Task</button>
          </form>
          <div>You've got nothing left to do!</div>
          <form>
            <input type="test" value={this.state.budgetInput} onChange={(event) => this.setState({budgetInput: event.target.value})}/>
            <button type="submit" onClick={(event) => this.setBudget(event)}>Input Budget</button>
          </form>
          <div>Difference: ${this.state.budget - this.calcTotal()}</div>
        </div>
      )
    }
  }
}


export default TaskList;

