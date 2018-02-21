import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      tasks = [],
      userInput = ''
=======
      tasks = []
>>>>>>> fac699dcd6163359311f4f5701f44d9eb0d79aca
    }
  }

  componentDidMount() {
<<<<<<< HEAD
    this.refreshList()
  }

  refreshList() {
=======
>>>>>>> fac699dcd6163359311f4f5701f44d9eb0d79aca
    axios.get('/tasks', {
      params: {
        user: this.props.user
      }
    })
    .then((response) => {
<<<<<<< HEAD
      this.setState({tasks: response})
=======

>>>>>>> fac699dcd6163359311f4f5701f44d9eb0d79aca
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
<<<<<<< HEAD
      this.refreshList()
=======

>>>>>>> fac699dcd6163359311f4f5701f44d9eb0d79aca
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
<<<<<<< HEAD
      this.refreshList()
=======

>>>>>>> fac699dcd6163359311f4f5701f44d9eb0d79aca
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
<<<<<<< HEAD
      cost: parseInt(cost)
    })
    .then((response) => {
      this.refreshList()
=======
      cost: cost
    })
    .then((response) => {

>>>>>>> fac699dcd6163359311f4f5701f44d9eb0d79aca
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
<<<<<<< HEAD
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
=======
    
>>>>>>> fac699dcd6163359311f4f5701f44d9eb0d79aca
  }
}