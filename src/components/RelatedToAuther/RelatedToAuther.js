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

  console.log(props)
  const [filter,setFilter] = useState({writer:props.bookWriter})
  
  const {data,isLoading,error } = booksApi.useGetAllBooksQuery(filter)
  const [writer,setWriter]= useState()
  const getWishList = booksApi.useGetWishListQuery();
  const [wishList, setWishList] = useState();
  const getBookShelf = booksApi.useGetUserBooksQuery()
  const [bookShelf,setBookShelf] = useState()  

  useEffect(() => {
    if(data){
      console.log(data)
      if(data.data.length < 3){
        setFilter({category:[props.bookCategory]})
      }

    }
    if(getWishList.data){
      setWishList(getWishList.data.wishList)
    }
    if(getBookShelf.data){
      setBookShelf(getBookShelf.data)
    }
 
  }, [data,getWishList.data,getBookShelf.data]);


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
          {data ? data.data.map((wbooks)=>{  
            // console.log(wbooks)
            return(
       
              <SwiperSlide key={wbooks._id}
                className='SwiperClasstest' style={{filter:"blur(0px)"}}
              >    
                <SingleBookAuthor 
                wbook={wbooks} 
                fav={!wishList ? false : wishList.bookItems.filter((book) => book._id === wbooks._id).length > 0 ? true : false}
                bookShelf={!bookShelf ? false : bookShelf.filter((bs)=>bs._id === wbooks._id ).length > 0 ? true : false }
                />              
              </SwiperSlide>
            )
          }): 
          null          
          }


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