import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks = [],
      userInput = '',
      budget = '',
      total = tasks.reduce((acc, task) => {
        if (task.price) {
          acc += task.price
        }
        return acc
      }, 0)
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

  addTask(task) {
    axios.post('/tasks', {
      task: task,
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

  assignCost(taskId, cost) {
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

  setBudget(budget) {
    axios.post('/budget', {
      budget: budget
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

  render() {
    <div>
      <form>
        <input type="text" value={this.state.userInput} onChange={event => this.setState({userInput: event.target.value})}/>
        <button type="submit" value="Add Task" onClick={this.addTask}/>
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
        <input type="test" value={this.state.budget} onChange={event => this.setState({budget: event.target.value})}/>
        <button type="submit" value="Input Budget" onClick={this.setBudget}/>
      </form>
      <div>Difference: ${this.state.budget - this.state.total}</div>
    </div>
  }
}

export default TaskList;
