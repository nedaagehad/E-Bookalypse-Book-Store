import React from 'react'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
import styles from './TrendingBooksUp.module.css';
import { useSelector } from 'react-redux';

import SwiperCore, { Autoplay, Navigation, Pagination,EffectCoverflow } from "swiper";

const TrendingBooksUp1 = () => {

  const theme = useSelector((state) => state.theme.currentTheme)

  const book2 =  "./uploads/books/book3.jpg";
  const book =  "./uploads/books/book2.jpg";
  const book3 =  "./uploads/books/book4.jpg";
  const book4 =  "./uploads/books/book5.jpg";
  SwiperCore.use([Autoplay])
  const images = [book2,book,book3,book4]

  return (
    <div className={`container-fluid ${theme === "night" ? "bg-dark" : ""}`}>
    <div className={`container p-5`}>
      <div className={styles.head + " mb-5 "}>
        <h5 className={styles.h5}>Trending This Week🚀</h5>
      </div>
      <div className={styles.sliderContainer +" container d-flex justify-content-center align-items-center mb-5 "} >
      
        <div  className={" row d-flex justify-content-center align-items-center"} style={{width:"65%"}}>
        
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={50}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            loop={true}
            navigation={{
              nextEl:'.nextTrendBook',
              prevEl: '.prevTrendBook',
            }}
            autoplay={{delay:1000}}
            className={styles.mySwiper}
            >
          {images ? images.map((img)=>{
            return(

              <SwiperSlide 
                className='SwiperClasstest'
              >    
                <div className={styles.slideImg}>
                  <img className={styles.trendBook}  src={img} alt={img} />

                </div>
              
              </SwiperSlide>
            )
          }): null}

          </Swiper>
          <div className={styles.navControllers}>
                <div className={styles.prevContainer}  >
                  <div className={styles.prevTrendBook + " prevTrendBook "}>
                    <AiOutlineArrowLeft />
                  </div>
                </div>
                <div className={styles.nextContainer} >
                  <div className={styles.nextTrendBook + " nextTrendBook "} >
                    <AiOutlineArrowRight />
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TrendingBooksUp1