import React from 'react';
import ReactDOM from 'react-dom';

function YelpListItem (props) {
    return (
        <div>
            <h4> {props.business.name} </h4>
            <h6> {props.business.address.address+", "} 
                {props.business.address.city+", "} 
                {props.business.address.state} </h6>
            <h6> {props.business.phone}</h6>
            <h6> Rating: <span></span> {props.business.rating}<span></span> stars </h6>

        </div>

    )
}

export default YelpListItem;