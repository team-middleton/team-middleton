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
    this.getYelpServices = this.getYelpServices.bind(this);
  }

  getYelpServices () {
    //this gets data from yelp based on our seach terms for services
    axios.get('/services', {
      params: {
        term: this.state.serviceQuery
      }
    })
    .then(function(response){
      this.setState({
        YelpList: response
      })
    })
  }

  componentDidMount() {
    this.getYelpServices();
  }

  handleChange(e) {
    // when dropdown value changes, it updates serviceQuery to that value
    this.setState({
      serviceQuery: e.target.value
    }, () => {
      // this serviceQuery value then is used as query term to yelp
      this.getYelpServices()
      console.log('new yelp state: ', this.state.YelpList);
    }) 
  }


  render () {
    return (
    <div>
      <form type="submit" value="Submit" >
        <select value={this.state.serviceQuery} onChange={this.handleChange.bind(this)} >
          <option value ="movers"> Movers </option>
          <option value ="supplies"> Supplies </option>
          <option value ="truck rental"> Truck rental </option>
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



