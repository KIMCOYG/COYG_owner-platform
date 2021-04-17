import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import chicken from '../static/image/chicken.jpg';

const Slider = () => {
    return (
        <AwesomeSlider>
            <div data-src={chicken} />
            <div data-src={chicken} />
            <div data-src={chicken} />
            <div data-src={chicken} />
        </AwesomeSlider>
    );
}

export default Slider;