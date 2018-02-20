import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
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
      <List items={this.state.items}/>
      <YelpList />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));