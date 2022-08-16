import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

//CSS Module
import styles from './Slider.module.css';

//Images
import Img1 from '../../assets/Slider/1.jpeg';
import Img2 from '../../assets/Slider/2.jpeg';
import Img3 from '../../assets/Slider/3.jpeg';


function UncontrolledExample() {

  return (

    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.HomeSliderimg}`}
          src={Img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.HomeSliderimg}`}
          src={Img2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.HomeSliderimg}`}
          src={Img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
    }

export default UncontrolledExample;