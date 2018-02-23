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
        location: '10538',
        map: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.getYelpServices = this.getYelpServices.bind(this);
    this.getZipCodeServices = this.getZipCodeServices.bind(this);

  }

  getYelpServices () {
    //this gets data from yelp based on our seach terms for services
    axios.get('/yelpRequest', {
      params: {
        term: this.state.serviceQuery,
        location: this.state.location
      }
    })
    //location needs to be helper function from the database
    .then((response) => {
      console.log('yelp data ', response.data)
      // console.log('client response : ', response)
      this.setState({

        YelpList: response.data,
        map: true
      },() => {
      }) 
    })
    .catch((err) => {
      console.error(err)
    })
  }


  getZipCodeServices () {
    // get zip code from the user
    axios.get('/zipcode')
    .then( (response) => {
      this.setState({
        //put the retrieve zip code from state
        location: response.data[0].zipcodefrom
      }, () =>{
        //once we have the zip code in state, get new yelp data for it
        this.getYelpServices()
      })
    }) 
  }

  componentDidMount() {
    this.getZipCodeServices();
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
    var mapComponent;
    if (this.state.map) {
      mapComponent = 
              <GoogleMaps 
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `50%`}} />}
          mapElement={<div style={{ height: `100%` }}/>}
          businesses={this.state.YelpList}
          />
    } else {
      mapComponent = null
    }


    return (
    <div className="dropdowns">
      <form type="submit" value="Submit" >
        <select value={this.state.serviceQuery} onChange={this.handleChange.bind(this)} >
          <option value ="movers"> Movers </option>
          <option value ="supplies"> Supplies </option>
          <option value ="truck rental"> Truck rental </option>
          <option value ="storage"> Storage </option>
        </select>
      </form>
      <div className="services">
        {this.state.YelpList.map((business, i) => 
            < YelpListItem  key={business.name} business={business} />
        )}
      </div>
      <div className="map">
      {mapComponent}
      </div>
    </div>
    )
  }
}

export default YelpList;



