import { Parallax } from 'react-scroll-parallax';
import van from '../../dist/van.png';
import road from '../../dist/road.png'
import React from 'react'

const ParallaxImage = () => (
    <div className="parallax">
    <Parallax
        className="truck"
        offsetYMax={30}
        offsetYMin={-30}
        offsetXMax={-30}
        offsetXMin={30}
        slowerScrollRate
        tag="figure"
    >
    <img src={van} />
    </Parallax>
    <Parallax
        className="road"
        offsetYMax={6}
        offsetYMin={-6}
        slowerScrollRate
        tag="figure"
    >
    <img src={road} />
    </Parallax>
    </div>
);

export default ParallaxImage;