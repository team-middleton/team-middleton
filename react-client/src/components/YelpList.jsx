import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import YelpDummyData from './YelpDummyData.jsx';
import YelpListItem from './YelpListItem.jsx';
import GoogleMaps from './GoogleMap.jsx';


class YelpList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        YelpList: [],
        serviceQuery: 'movers',
        location: '02140'
    }
    this.handleChange = this.handleChange.bind(this);
    this.getYelpServices = this.getYelpServices.bind(this);
  }

  getYelpServices () {
    //this gets data from yelp based on our seach terms for services
    axios.get('/services', {
      params: {
        term: this.state.serviceQuery,
        location: this.state.location
      }
    })
    //location needs to be helper function from the database
    .then((response) => {
      console.log('client response : ', response)
      this.setState({
        YelpList: response.data
      },() => {
        
      }) 
    })
  }

  componentDidMount() {
    // set state to zip code from helper function from the database
    this.getYelpServices();
  }

  handleChange(e) {
    // when dropdown value changes, it updates serviceQuery to that value
    this.setState({
      serviceQuery: e.target.value
    }, () => {
      this.getYelpServices()
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

      <GoogleMaps 
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }}/>}
        latitude={37.80587}
        longitude={-122.42058}
        />

    </div>)
  }
}

export default YelpList;



