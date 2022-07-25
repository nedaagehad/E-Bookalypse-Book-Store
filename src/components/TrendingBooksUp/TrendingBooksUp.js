import { useState } from "react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import "../TrendingBooksUp/TrendingBooksUp.module.css";

import styles from './TrendingBooksUp.module.css'
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'

import book from "./public/assets/books/book.jpg";
import book2 from "../imges/book2.jpg";
import book4 from "../imges/book4.jpg";
import book5 from "../imges/book5.jpg";



// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
function TrendingBooksUp() {
 const images = [book, book2, book4, book5];

  const NextArrow = ({ onClick }) => {
     return (
      <div className={styles.arrow +" "+ styles.next} onClick={onClick}>
        {/* <div className="arrow next" onClick={onClick}> */}
        <AiOutlineArrowRight />
      </div>
     );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={styles.arrow +" "+ styles.prev} onClick={onClick}>
        {/* <div className="arrow prev" onClick={onClick}> */}
        <AiOutlineArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
    <div className={styles.head}><h5 className={styles.h5}>Trending This Week🚀</h5></div>
    <div className={styles.App}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? styles.slide + " " +styles.activeSlide : styles.slide}>           
            <img className={styles.trendBook} src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}

export default TrendingBooksUp