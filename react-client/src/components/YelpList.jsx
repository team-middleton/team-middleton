import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import YelpDummyData from './YelpDummyData.jsx';
import YelpListItem from './YelpListItem.jsx';


class YelpList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        YelpList: YelpDummyData,
        serviceQuery: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log('e target value ', e.target.value)
    this.setState({
      serviceQuery: e.target.value
    })
    this.handleSubmit(e);
    this.setState({
      serviceQuery: e.target.value
    })
  }

  handleSubmit(e) {
    console.log('selected service is ', this.state.serviceQuery);
    e.preventDefault();
  }

  render () {
      console.log(this.state.YelpList);
    return (
    <div>
      <form onSubmit={this.handleSubmit} type="submit" value="Submit" >
        <select value={this.state.serviceQuery} onChange={this.handleChange} >
          <option value ="movers"> Movers </option>
          <option value ="supplies"> Supplies </option>
          <option value ="supplies"> Truck rental </option>
          <option value ="storage"> Storage </option>
        </select>
      </form>
      {this.state.YelpList.map((business, i) => 

          < YelpListItem  key={business.name} business={business} />
      )}

    </div>)
  }
}

export default YelpList;



