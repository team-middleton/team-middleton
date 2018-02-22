import React from 'react';
import ReactDOM from 'react-dom';

function YelpListItem (props) {
    return (
        <div style={{
            border: "1px solid grey",
            borderRadius: '10px',
            padding: '10px'
        }}>
            <h5> <a href={props.business.url} target='_blank'> {props.business.name}</a> </h5>
            <h6> {props.business.address[0]}<span></span> {props.business.address.slice(1)}</h6>
            <h6> {props.business.phone}</h6>
            <h6> Rating: <span></span> {props.business.rating}<span></span> stars </h6>

        </div>

    )
}

export default YelpListItem;