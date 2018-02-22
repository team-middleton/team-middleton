
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
        return <Marker 
          key={props.businesses[i].name}
          position={{ lat: props.businesses[i].coordinates.latitude, lng: props.businesses[i].coordinates.longitude }} 
        />
      })
    }

  </GoogleMap>

	)))

export default GoogleMaps