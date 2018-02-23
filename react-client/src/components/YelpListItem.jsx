import React from 'react';
import ReactDOM from 'react-dom';

function YelpListItem (props) {
    return (
        <div className="yelpItems">
            <h5> <a href={props.business.url} target='_blank'> {(props.index + 1).toString()+'.'} <span></span> {props.business.name}</a> </h5>
            <h6> {props.business.address[0]}<span></span> {props.business.address.slice(1)}</h6>
            <h6> {props.business.phone}</h6>
            <h6> Rating: <span></span> {props.business.rating}<span></span> stars </h6>

        </div>

    )
}

export default YelpListItem;