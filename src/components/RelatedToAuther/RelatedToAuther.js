import React from 'react'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
import styles from './RelatedToAuther.module.css'


import SwiperCore, { Autoplay, Navigation, Pagination,EffectCoverflow } from "swiper";

const RelatedToAuther = () => {
  const book2 =  "../../Images/Books/1.jpg";
  const book =  "../../Images/Books/2.jpg";
  const book3 =  "../../Images/Books/3.jpg";
  const book4 =  "../../Images/Books/4.jpg";
  SwiperCore.use([Autoplay])
  const images = [book2,book,book3,book4]

  return (
    <div className=' container mb-5'>
      <div className={styles.head + " mb-5 "}>
        <h5 className={styles.h5}>Related To Auther</h5>
      </div>
      <div className={styles.sliderContainer +" container d-flex justify-content-center align-items-center mb-5 "} >
      
        <div  className={" row d-flex justify-content-center align-items-center"} style={{width:"100%"}}>
        
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            effect={"cards"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
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
            autoplay={{delay:1500}}
            className={styles.mySwiper}
            >
          {images ? images.map((img)=>{
            return(

              <SwiperSlide 
                className='SwiperClasstest' style={{filter:"blur(0px)"}}
              >    
                <div className={styles.slideImg}>
                  <img className={styles.trendBook}  src={img} alt={img} />
                        <div className={styles.details}>
                            <div className={styles.prices}>
                                <h3>$15.56</h3>
                                <h6><del>$19.56</del></h6>
                            </div>
                            <div className={styles.action}>
                                <button> <i className={styles.basketIcon + " col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
                            </div>
                    </div>
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
  )
}

export default RelatedToAuther