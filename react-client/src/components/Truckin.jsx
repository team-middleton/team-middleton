import React from 'react';
import ReactDOM from 'react-dom';
import imageloader from 'image-webpack-loader';
import truck from '.assets/van.eps';

function Truckin() {
    return (
        <div>
            <img src={truck} className="truck"/>
        </div>

    )
}

export default Truckin;
