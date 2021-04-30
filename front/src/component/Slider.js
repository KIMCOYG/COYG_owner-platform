import React from 'react';
// import SimpleImageSlider from 'react-simple-image-slider';
import { Carousel } from 'react-bootstrap';
import chicken from '../static/image/chicken.jpg';
import pizza from '../static/image/pizza.jpg';
import laptop from '../static/image/laptop.jpg';
import coffee from '../static/image/coffee.jpg';

const Slider = () => {
  return (
    <>
      <div className="w-100" style={{ minHeight: '250px' }}>
        <Carousel className="mt-3" autoPlay={false} slide={false}>
          <Carousel.Item>
            <img src={chicken} alt="chicken" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza} alt="chicken" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={laptop} alt="chicken" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={coffee} alt="chicken" className="d-block w-100" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
