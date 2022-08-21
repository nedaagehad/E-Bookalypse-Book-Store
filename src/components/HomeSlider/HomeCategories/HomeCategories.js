import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { booksApi } from '../../../store/services';
import { useSelector } from 'react-redux';

//CSS Files
import styles from './HomeCategories.module.css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//Components
import SingleCategory from './SingleCategory/SingleCategory';

//Icons
import { BsDashLg } from 'react-icons/bs';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const HomeCategories = (props) => {

  const theme = useSelector((state) => state.theme.currentTheme);

  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetAllCategoriesQuery();
  const [categories, setCategories] = useState();

  useEffect(() => {
    if (data) {      
      setPrev(false);
      setNext(true);
      setCategories(data.categories)
    }
  }, [data]);

  return (
    <>
      <div className={`container-fluid ${theme === "night" ? "bg-dark" : "bg-white"}`}>
        <div className={styles.titleandPagination}>
          <h4 className={`${styles.h4} ${theme === "night" ? "text-light" : "text-dark"}`}>Categories</h4>
          <div className="paginationSwiper ms-3 ms-md-0" >
            <BsDashLg className="dashed" />
          </div>

        </div>
        <div className={styles.categoriesHomeSlider + " container-fluid mt-4 mb-5 pb-5"}>
          <Swiper
            slidesPerView={6}
            // spaceBetween={10}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              // when window width is >= 767px
              767: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              // when window width is >= 1000px
              1000: {
                slidesPerView: 6,
                spaceBetween: 10
              }
            }}

            navigation={{
              nextEl: '.nextCategory',
              prevEl: '.prevCategory',
            }}

            pagination={{
              el: ".paginationSwiper",
              clickable: true,
              bulletClass: "swiperCategory",
              bulletActiveClass: "swiperCategoryActive",

              renderBullet: (index, className) => {
                return '<span class="' + className + '"></span>'
              },
            }}

            onReachEnd={() => {
              setPrev(true)
              setNext(false)
            }}

            onReachBeginning={() => {
              setPrev(false)
              setNext(true)
            }}

            onActiveIndexChange={({realIndex}) => {
              if (realIndex >= 1)
              {
                setPrev(true);
              }

              if (realIndex < 3)
              {
                setNext(true);
              }
            }}

            className="mySwiper">
            {categories ? categories.map((category, index) => {
              return (
                <SwiperSlide key={category._id}>
                  <SingleCategory
                    key={category._id}
                    category={category}
                  />
                </SwiperSlide>
              )
            }) : null}
          </Swiper>
          <div className={styles.navControllers}>
              <div className={`prevCategory ${theme === "night" ? styles.prevContainerNight : styles.prevContainer} ${!prev ? "opacity-0" : ""}`}>
                <div className={styles.prevCategory}>
                  <AiOutlineArrowLeft />
                </div>
              </div>

              <div className={`nextCategory ${theme === "night" ? styles.nextContainerNight : styles.nextContainer} ${!next ? "opacity-0" : ""}`}>
                <div className={styles.nextCategory} >
                  <AiOutlineArrowRight />
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCategories;