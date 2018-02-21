import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks = [],
      userInput = ''
    }
  }

  componentDidMount() {
    this.refreshList()
  }

  refreshList() {
    axios.get('/tasks', {
      params: {
        user: this.props.user
      }
    })
    .then((response) => {
      this.setState({tasks: response})
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
      this.refreshList()
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
      this.refreshList()
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
      cost: parseInt(cost)
    })
    .then((response) => {
      this.refreshList()
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    <div>
      <div>
        {this.state.tasks.map((task) => {
          <Task 
          task = {task}
          removeTask = {this.removeTask}
          markCompleted = {this.markCompleted}
          assignCost = {this.assignCost}
          />
        })}
      </div>
      <form>
        <input type="text" value={this.state.userInput} onChange={(event => this.setState({userInput: event.target.value}))}/>
        <button type="submit" value="Add Task" onClick={this.addTask}/>
      </form>
    </div>
  }
}