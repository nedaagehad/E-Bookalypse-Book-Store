import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation} from 'swiper';
import { useSelector } from 'react-redux';
import { booksApi } from '../../store/services';

//Slider CSS Files
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

//CSS Module
import styles from './FlashSaleSlider.module.css'

//Components
import FlashSaleCard from '../BookCard/FlashSaleCard';
import CountDown from '../CountDown/CountDown';

SwiperCore.use(Navigation);

function FlashSaleSlider() {
    
    const theme = useSelector((state) => state.theme.currentTheme);
    
    const [prevDis,setPrevDis] = useState(false);
    const [nextDis,setNextDis] = useState(true);
    const {data,isLoading,error} = booksApi.useGetAllBooksQuery()
    const [flashSales,setFlashSales ] = useState()

    useEffect(() => {
       if(data){
        setFlashSales(data.data)
       }
    }, [data]);
    
    const handleNavigatePrev =() => {
        setNextDis(true);
    }

    const handleNavigateNext =() => {
        setPrevDis(true);
    }

  return (
    <div className={`${theme === "night" ? styles.flashSaleNight : styles.flashSale} mt-3`}>
        <div className = "container">
            <div className = "row py-5">
                <div className='col-12 col-lg-3 text-white'>
                    <h3>Flash Sale</h3>
                    <small>Catch our interesting Sales before timer runs off!</small>
                    <CountDown />
                </div>
                <div className='col-12 col-lg-9 position-relative align-items-center'>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={2}
                        navigation = {{
                            nextEl:".next",
                            prevEl:".prev"
                        }}
                        onSliderMove = {()=>{
                            setNextDis(true);
                            setPrevDis(true);
                        }}
                        // onReachEnd={() => {
                        //     setNextDis(false);
                        // }}
                        // onReachBeginning = {()=>{
                        //     setPrevDis(false);
                        // }}

                        >
                        {flashSales ? flashSales.map((b)=>{
                            if(b.promotion.length > 0){
                                return(
                                    <SwiperSlide key={b._id}><FlashSaleCard book={b}/></SwiperSlide>
                                )
                            }
                        }):null}

                    </Swiper>
                    <i className={`${styles.prev} prev ${prevDis? "d-block" : "d-none"} bi bi-arrow-left`} onClick={handleNavigatePrev}></i>
                    <i className={`${styles.next} next ${nextDis? "d-block" : "d-none"} bi bi-arrow-right`} onClick={handleNavigateNext}></i>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FlashSaleSlider;