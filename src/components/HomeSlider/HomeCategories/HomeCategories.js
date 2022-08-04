import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import styles from './HomeCategories.module.css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";
import {BsDashLg } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const HomeCategories = (props) => {

  const theme = useSelector((state) => state.theme.currentTheme);

  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);

  return (
    <>
      {/* categories section */}
      <div className={`container-fluid ${theme === "night" ? "bg-dark" : ""}`}>
        <div className={styles.titleandPagination}>
          <h4 className={`${styles.h4} ${theme === "night" ? "text-light" : ""}`}>Categories</h4>
          <div className=" paginationSwiper" >
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
                slidesPerView: 2,
                spaceBetween: 20
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              // when window width is >= 640px
              640: {
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
            }

            }
            onReachBeginning={() => {
              setPrev(false)
              setNext(true)
            }}

            onReachStart={() => setPrev(false)}

            className="mySwiper"
          >

            <SwiperSlide>
              <div className={styles.categoryCard} style={{ backgroundImage: "url(" + "./Images/Categories/Biography.jpg" + ')' }}>
                <div className={styles.categoryData}>
                  <div className={styles.categorytextandtitle}>
                    <h4 className={styles.h4}>{props.data[0].Category_Name}</h4>
                    <span className={styles.span}>{props.data[0].Num_of_books ? props.data[0].Num_of_books : "Comming Soon"}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.categoryCard} style={{ backgroundImage: "url(" + "./Images/Categories/Children.jpg" + ')' }}>
                <div className={styles.categoryData}>
                  <div className={styles.categorytextandtitle}>
                    <h4 className={styles.h4}>{props.data[1].Category_Name}</h4>
                    <span className={styles.span}>{props.data[1].Num_of_books ? props.data[1].Num_of_books : "Comming Soon"}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.categoryCard} style={{ backgroundImage: "url(" + "./Images/Categories/horror.jpg" + ')' }}>
                <div className={styles.categoryData}>
                  <div className={styles.categorytextandtitle}>
                    <h4 className={styles.h4}>{props.data[2].Category_Name}</h4>
                    <span className={styles.span}>{props.data[2].Num_of_books ? props.data[2].Num_of_books : "Comming Soon"}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.categoryCard} style={{ backgroundImage: "url(" + "./Images/Categories/history.jpg" + ')' }}>
                <div className={styles.categoryData}>
                  <div className={styles.categorytextandtitle}>
                    <h4 className={styles.h4}>{props.data[3].Category_Name}</h4>
                    <span className={styles.span}>{props.data[3].Num_of_books ? props.data[3].Num_of_books : "Comming Soon"}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.categoryCard} style={{ backgroundImage: "url(" + "./Images/Categories/scientific.jpg" + ')' }}>
                <div className={styles.categoryData}>
                  <div className={styles.categorytextandtitle}>
                    <h4 className={styles.h4}>{props.data[4].Category_Name}</h4>
                    <span className={styles.span}>{props.data[4].Num_of_books ? props.data[4].Num_of_books : "Comming Soon"}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.categoryCard} style={{ backgroundImage: "url(" + "./Images/Categories/Novels.jpg" + ')' }}>
                <div className={styles.categoryData}>
                  <div className={styles.categorytextandtitle}>
                    <h4 className={styles.h4}>{props.data[5].Category_Name}</h4>
                    <span className={styles.span}>{props.data[5].Num_of_books ? props.data[5].Num_of_books : "Comming Soon"}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.categoryCard} style={{ backgroundImage: "url(" + "./Images/Categories/art.jpg" + ')' }}>
                <div className={styles.categoryData}>
                  <div className={styles.categorytextandtitle}>
                    <h4 className={styles.h4}>{props.data[6].Category_Name}</h4>
                    <span className={styles.span}>{props.data[6].Num_of_books ? props.data[6].Num_of_books : "Comming Soon"}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.categoryCard} style={{ backgroundImage: "url(" + "./Images/Categories/poeatries.jpg" + ')' }}>
                <div className={styles.categoryData}>
                  <div className={styles.categorytextandtitle}>
                    <h4 className={styles.h4}>{props.data[7].Category_Name}</h4>
                    <span className={styles.span}>{props.data[7].Num_of_books ? props.data[7].Num_of_books : "Comming Soon"}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.categoryCard} style={{ backgroundImage: "url(" + "./Images/Categories/religious.jpg" + ')' }}>
                <div className={styles.categoryData}>
                  <div className={styles.categorytextandtitle}>
                    <h4 className={styles.h4}>{props.data[8].Category_Name}</h4>
                    <span className={styles.span}>{props.data[8].Num_of_books ? props.data[8].Num_of_books : "Comming Soon"}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
          <div className={styles.navControllers}>
            <div className={theme === "night" ? styles.prevContainerNight : styles.prevContainer} style={prev ? { opacity: '1' } : { opacity: '0' }}>
              <div className={styles.prevCategory + " prevCategory "}>
                <AiOutlineArrowLeft />
              </div>
            </div>
            <div className={theme === "night" ? styles.nextContainerNight : styles.nextContainer} style={next ? { opacity: '1' } : { opacity: '0' }}>
              <div className={styles.nextCategory + " nextCategory "} >
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCategories