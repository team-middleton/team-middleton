
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker , defaultCenter} from "react-google-maps";

const GoogleMaps = withScriptjs(withGoogleMap((props) => (

  // these are just default coordinates as a reference; I think they are to the empire state building
  // the actual center is set to the location of the first item in our services list 

  // this is a conditional that renders a bouncing marker or a static one
  // based on if that item is hovered over

  //FYI - under react-client->dist->bluemapmarkers, 
  //I have saved a blue marker for each the letters of the alphabet
  // the aim was to make the bouncing marker blue when the user hovers over it
  // to do so: it involves setting the value of icon to that image
  // but this was a bit more complicated than I expected so I abandoned ship
  <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 40.755603, lng: -73.984931 }}
      center={{ lat: props.businesses[0].coordinates.latitude, lng: props.businesses[0].coordinates.longitude }}
  >
      {props.isMarkerShown && 
        props.businesses.map((business, i) => {
            var letter =  String.fromCharCode(65 + i);
            if (props.hovered === i) {


              return ( <Marker 
              animation = {google.maps.Animation.BOUNCE}
              key={props.businesses[i].name}
              position={{ lat: props.businesses[i].coordinates.latitude, lng: props.businesses[i].coordinates.longitude }} 
            />)
            } else {
              return ( <Marker 
              label= {letter}
              key={props.businesses[i].name}
              position={{ lat: props.businesses[i].coordinates.latitude, lng: props.businesses[i].coordinates.longitude }} 
            />)
            }
        })
      }

  </GoogleMap>

	)))

export default GoogleMaps