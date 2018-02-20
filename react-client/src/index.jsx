import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import YelpList from './components/YelpList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      YelpListItems: []
    }
  }




  render () {
    return (<div>
      <h1>Item List</h1>

      <YelpList />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));