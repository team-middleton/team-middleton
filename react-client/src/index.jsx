import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Homeheader from './components/homeHeader.jsx';
import Homemain from './components/homeMain.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false
    }
  }

  logIn() {
    this.setState({loggedIn: true})
  }

  logOut() {
    axios.post('/logout')
    .then((response) => {
      this.setState({loggedIn: false})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render () {
    if(this.state.loggedIn){
      return (<div>
      <h1>Moving App</h1>
      <Header logout={this.logOut}/>
      <Main />
    </div>)
    }
    else{
      return (<div>
      <h1>Movin on Up</h1>
      <Homeheader />
      <Homemain />
    </div>)
    }
  }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));