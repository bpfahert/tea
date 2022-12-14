import React from 'react';

export default function Tea(props) {



    return(
        <div className="teadiv">
            <ul className="tealist">
                <li>Tea Name: {props.teaname}</li>
                <li>Type: {props.type}</li>
                <li>Brand: {props.brand}</li>
                <li>Rating: {props.rating}</li>
                <li>Notes: {props.notes}</li>
            </ul>
        </div>
    )
}