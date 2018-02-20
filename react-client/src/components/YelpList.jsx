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
        serviceQuery: 'movers'
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    
  }

  getYelpServices () {
    
  }

  handleChange(e) {
    // when dropdown value changes, it updates serviceQuery to that value
    this.setState({
      serviceQuery: e.target.value
    }, () => {
      // this serviceQuery value then is used as query term to yelp
      axios.post('services', {
        queryTerm: this.state.serviceQuery
      })
      // we then set the data from our post request to YelpList values
      .then(function(response){
        this.setState({
          YelpList: response
        })
      })
    }) 


  render () {
    return (
    <div>
      <form type="submit" value="Submit" >
        <select value={this.state.serviceQuery} onChange={this.handleChange.bind(this)} >
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



