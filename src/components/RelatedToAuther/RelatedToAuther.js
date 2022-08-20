import React, { useState, useEffect } from 'react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import styles from './RelatedToAuther.module.css'
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { booksApi } from '../../store/services';
import SingleBookAuthor from './SingleBookAuthor/SingleBookAuthor';

const RelatedToAuther = (props) => {

  SwiperCore.use([Autoplay])

  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetAllBooksQuery(props.bookWriter)

  const [writer, setWriter] = useState()

  useEffect(() => {
    if (data) {
      setWriter(data.data)
    }
  }, [data]);

  return (
    <div className=' container mb-5'>
      <div className={styles.head + " mb-5 "}>
        <h5 className={styles.h5}>Related To Auther</h5>
      </div>
      <div className={styles.sliderContainer + " container d-flex justify-content-center align-items-center mb-5 "} >

        <div className={" row d-flex justify-content-center align-items-center"} style={{ width: "100%" }}>

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
              nextEl: '.nextTrendBook',
              prevEl: '.prevTrendBook',
            }}
            autoplay={{ delay: 1500 }}
            className={styles.mySwiper}
          >
            {writer ? writer.map((wbooks) => {
              return (

                <SwiperSlide key={wbooks._id}
                  className='SwiperClasstest' style={{ filter: "blur(0px)" }}
                >
                  <SingleBookAuthor wbook={wbooks} />
                </SwiperSlide>
              )
            }) : null}

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