import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import Truckin from './components/Truckin.jsx';
import Main from './components/Main.jsx';
import Logout from './components/Logout.jsx';
// import homeHeader from './components/homeHeader.jsx';
// import homeMain from './components/homeMain.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false
    }
  }

  render () {
    if(this.state.loggedIn){
      return (<div>
      <h1>Moving App</h1>
      <Header />
      <Main />
      <Logout />
    </div>)
    }
    else{
      return (<div>
      <h1>Movin on Up</h1>
      <homeHeader />
      <homeMain />
      <Truckin />
    </div>)
    }
  }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));