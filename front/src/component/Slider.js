import React from 'react';
// import SimpleImageSlider from 'react-simple-image-slider';
import { Carousel } from 'react-bootstrap';
import chicken from '../static/image/chicken.jpg';

const Slider = () => {
  return (
    <>
      <Carousel className="mt-3">
        <Carousel.Item>
          <img src={chicken} alt="chicken" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={chicken} alt="chicken" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={chicken} alt="chicken" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={chicken} alt="chicken" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
