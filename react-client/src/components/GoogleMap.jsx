
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker , defaultCenter} from "react-google-maps";

const GoogleMaps = withScriptjs(withGoogleMap((props) => (

  <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 40.755603, lng: -73.984931 }}
      center={{ lat: props.businesses[0].coordinates.latitude, lng: props.businesses[0].coordinates.longitude }}
  >

      {props.isMarkerShown && 
        props.businesses.map((business, i) => {
          {/*if(props.hovered !== null) {
            console.log('item hovered ', props.itemHovered)
            var letter =  props.itemHovered.toString();
          } else {
            var letter =  String.fromCharCode(65 + i);
          }*/}
          
          return <Marker 
            label= {letter}
            key={props.businesses[i].name}
            position={{ lat: props.businesses[i].coordinates.latitude, lng: props.businesses[i].coordinates.longitude }} 
          />
        })
      }

  </GoogleMap>

	)))

export default GoogleMaps