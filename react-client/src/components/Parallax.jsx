import { Parallax } from 'react-scroll-parallax';
import van from '../../dist/van.png';
import road from '../../dist/road.png'
import React from 'react'

const ParallaxImage = () => (
    <div className="parallax">
    <Parallax
        offsetYMax={30}
        offsetYMin={-30}
        offsetXMax={-5}
        offsetXMin={5}
        slowerScrollRate
        tag="figure"
    >
    <img className="truck" src={van} />
    </Parallax>
    <br/>
    <Parallax
        offsetYMax={5}
        offsetYMin={-5}
        slowerScrollRate
        tag="figure"
    >
    <img className="road" src={road} />
    </Parallax>
    </div>
);

export default ParallaxImage;

//The parallax component is set up for scrolling, so all offsets will confirm to that. 