import { Parallax } from 'react-scroll-parallax';
import van from '../../dist/van.png';
import road from '../../dist/road.png'
import React from 'react'
const ParallaxImage = () => (
    <div>
    <Parallax
        className="truck"
        offsetYMax={70}
        offsetYMin={-70}
        offsetXMax={-30}
        offsetXMin={30}
        slowerScrollRate
        tag="figure"
    >
    <img src={van} />
    </Parallax>
    <Parallax
        className="road"
        offsetYMax={70}
        offsetYMin={-70}
        offsetXMax={-30}
        offsetXMin={30}
        slowerScrollRate
        tag="figure"
    >
    <img src={road} />
    </Parallax>
    </div>
);

export default ParallaxImage;