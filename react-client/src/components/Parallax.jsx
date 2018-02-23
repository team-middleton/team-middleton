import { Parallax } from 'react-scroll-parallax';
import van from './van.png';
 
const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <Image src="/van.png" />
    </Parallax>
);

export default ParallaxImage;