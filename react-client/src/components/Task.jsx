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
    // renders task component with different CSS classes depending on whether or not the user has marked it as complete
    if (this.props.checked) { 
      return (
        <div className="task">
          <input className="checkbox" type="checkBox" onClick={() => {this.props.markCompleted(this.props.id)}} checked/>
          <div className="complete" >{this.props.task}</div>
          <form>
            <input type="text" value={this.state.userInput} onChange={(event) => {this.setState({userInput: event.target.value})}}/>
            <input type="submit" value="Input Cost" onClick={(event) => {this.props.assignCost(event, this.props.id, this.state.userInput)}}/>
          </form>
          <div>${this.props.cost || '0'}</div>
          <button onClick={() => {this.props.removeTask(this.props.id, this.props.index)}}>Remove</button>
        </div>
      )
    } else {
      return (
        <div className="task">
          <input className="checkbox" type="checkBox" onClick={() => {this.props.markCompleted(this.props.id)}}/>
          <div className="incomplete">{this.props.task}</div>
          <form>
            <input type="text" value={this.state.userInput} onChange={(event) => {this.setState({userInput: event.target.value})}}/>
            <input type="submit" value="Input Cost" onClick={(event) => {this.props.assignCost(event, this.props.id, this.state.userInput)}}/>
          </form>
          <div>${this.props.cost || '0'}</div>
          <button onClick={() => {this.props.removeTask(this.props.id, this.props.index)}}>Remove</button>
        </div>
      )
    }
  }
}

export default Task


