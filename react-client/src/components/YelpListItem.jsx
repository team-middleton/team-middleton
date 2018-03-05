import React from 'react';
import ReactDOM from 'react-dom';

function YelpListItem (props) {
    return (
        <div className="yelpItems">
            <h5> <a href={props.business.url} target='_blank' 
            // target_blank makes it so that when a link is clicked, it's opened in a new tab
            onMouseEnter={props.onMouseEnter.bind(this, props.index)}
            onMouseLeave={props.onMouseLeave.bind(this, props.index)}   
               > 
               {props.letter+'. '} 
                {props.business.name}
            </a> </h5>

            <h6> {props.business.address[0]}<span></span> {props.business.address.slice(1)}</h6>
            {/* to note: the phone number is formatted in the server side in the utils 
            file. could be a good thing to fix, as I essentially added parentheses and dashes in the right
            places, which doesn't account for if we receive a number in a different format
            */}
            <h6> {props.business.phone}</h6>
            <h6> Rating: <span></span> {props.business.rating}<span></span> stars </h6>

        </div>

    )
}

export default YelpListItem;