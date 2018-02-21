import React from 'react'
import ReactDOM from 'react-dom'

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }

  render() {
    <div class="task">
      <input type="checkBox" onClick={this.props.markCompleted(this.props.id)}/>
      <div>{this.props.task}</div>
      <form>
        <input type="text" value={this.state.userInput} onChange={this.setState({userInput: event.target.value})}/>
        <input type="submit" value="Input Cost" onClick={this.props.assignCost(this.props.id, this.state.userInput)}/>
      </form>
      <button onClick={this.props.removeTask(this.props.id)}>Remove</button>
    </div>
  }
}

export default TaskList
