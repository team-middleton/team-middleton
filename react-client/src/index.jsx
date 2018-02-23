import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Parallax from "./components/Parallax.jsx";
import { ParallaxProvider } from 'react-scroll-parallax';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Moving from './components/Router.jsx';
import logo from '../dist/fullLogo.png';
// import road from '../../dist/road.png'


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
        <div className="root">
          <div className="nav"><img src={logo} className="logo"/></div>
          <Moving logout={this.logout.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div className="root">
          <h1>Welcome to Movin' on Up!</h1>
          <Parallax />
          <Login login={this.login.bind(this)} />
          <Signup />
        </div>
      )
    }
  }
}

ReactDOM.render(<ParallaxProvider><App /></ParallaxProvider>, document.getElementById('app'));