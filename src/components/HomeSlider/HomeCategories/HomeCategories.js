import React, { useEffect, useState } from 'react'

import { FaClock } from 'react-icons/fa';
import {BsFillCreditCardFill,BsFillAwardFill,BsFillShieldFill,BsDashLg} from 'react-icons/bs'
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
import styles from  './HomeCategories.module.css';




import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";
import {BsDashLg } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";
import { booksApi } from '../../../store/services';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const HomeCategories = (props) => {

  const theme = useSelector((state) => state.theme.currentTheme);

  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
  const {data,isLoading,error} = booksApi.useGetAllCategoriesQuery()
  const [categories,setCategories] = useState()
  useEffect(() => {
    if(data){
      setCategories(data.categories)
      console.log(data)
      
      setPrev(false)
    }
  }, [data]);


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

          className="mySwiper"
        >
          {categories ? categories.map((category, index) => 
          <SwiperSlide key={category._id}>
            <div className={styles.categoryCard} style={{backgroundImage: "url("+"./Images/Categories/Biography.jpg"+')' }}>
              <div  className={styles.categoryData}>
                <div className={styles.categorytextandtitle}>
                <h4 className={styles.h4}>{category.title}</h4>
                <span className={styles.span}>{props.data[0].Num_of_books ? props.data[0].Num_of_books : "Comming Soon"}</span>
                </div>
              </div>
            </div> 
          </SwiperSlide>

          ): null}
  
        
        </Swiper>     

        </div>
      </div>
    </>
  )
}

export default HomeCategories