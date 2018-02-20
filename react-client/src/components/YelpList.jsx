import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import YelpDummyData from './YelpDummyData.jsx';
import YelpListItem from './YelpListItem.jsx';


class YelpList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        YelpList: YelpDummyData
    }
  }




  render () {
      console.log(this.state.YelpList);
    return (
    <div>
      <h2> Yelp List</h2>

      {this.state.YelpList.map((business, i) => 


          < YelpListItem  key={business.name} />
      )}

    </div>)
  }
}

export default YelpList;



