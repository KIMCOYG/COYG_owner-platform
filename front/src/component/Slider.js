import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import chicken from '../static/image/chicken.jpg';

const Slider = () => {
    // const urlPath = "";
    const images = [
        { url: chicken},
        { url: chicken},
        { url: chicken},
        { url: chicken},
        { url: chicken},
        { url: chicken},
        { url: chicken},
    ]
    return (
       <div>
           <SimpleImageSlider
            width={896} 
            height={504}
            images={images}
           />
       </div>
    );
}

export default Slider;