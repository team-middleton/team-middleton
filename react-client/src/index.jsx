import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Moving from './components/Router.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false
    }
  }

  login() {
    this.setState({loggedIn: true})
  }

  logout() {
    axios.get('/logout')
    .then((response) => {
      this.setState({loggedIn: false})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render () {
    if (this.state.loggedIn) {
      return (
        <div>
          <h1>Moving App</h1>
          <Moving logout={this.logout.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Welcome to Movin' on Up!</h1>
          <Login login={this.login.bind(this)} />
          <Signup />
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));