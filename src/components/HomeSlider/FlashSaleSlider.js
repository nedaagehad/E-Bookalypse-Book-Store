import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation} from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import FlashSaleCard from '../BookCard/FlashSaleCard';
import styles from './FlashSaleSlider.module.css'
SwiperCore.use(Navigation);

function FlashSaleSlider() {
    const endDate = new Date("12/11/2022");

    const getremaining = (end) => {
        let currentDate = new Date();
        if(currentDate <= end){
            let diff = end - currentDate;
            let seconds = Math.round(diff/1000);
            return seconds;
        }
    }
    
    const [remainSec,SetRemainSec] = useState(getremaining(endDate));
    const [prevDis,setPrevDis] = useState(false);
    const [nextDis,setNextDis] = useState(true);

    

    const displayCountDown = () => {
        let disDay = (remainSec/(60*60*24)) - (remainSec/(60*60*24))%1;

        let divisorForHours = (remainSec/(60*60*24))%1;
        let disHours = (divisorForHours*24) - (divisorForHours*24)%1

        let divisorForMin = (divisorForHours*24)%1;
        let disMin = (divisorForMin*60) - (divisorForMin*60)%1

        let divisorForSec = (divisorForMin*60)%1;
        let disSec = Math.round(divisorForSec*60);
       
        return `${disDay<=9? "0"+disDay: disDay } : ${disHours<=9? "0"+disHours: disHours } : ${disMin<=9? "0"+disMin: disMin } : ${disSec<=9? "0"+disSec: disSec }`;
    }

    useEffect(() => {
        setInterval(()=>{
            SetRemainSec(getremaining(endDate));
        },1000);
    },[remainSec,prevDis,nextDis])

    const handleNavigatePrev =() => {
        setNextDis(true);
    }

    const handleNavigateNext =() => {
        setPrevDis(true);
    }

  return (
    <div className={styles.flashSale + " mt-3 "}>
        <div className = "container">
            <div className = "row py-5">
                <div className='col-12 col-lg-3 text-white'>
                    <h3>Flash Sale</h3>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</small>
                    <h3 className={styles.flashCount + " p-3 mt-3 text-center rounded-2 "} >{displayCountDown()}</h3>
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
                        onReachEnd={() => {
                            setNextDis(false);
                        }}
                        onReachBeginning = {()=>{
                            setPrevDis(false);
                        }}

                        >
                        <SwiperSlide><FlashSaleCard/></SwiperSlide>
                        <SwiperSlide><FlashSaleCard/></SwiperSlide>
                        <SwiperSlide><FlashSaleCard/></SwiperSlide>
                        <SwiperSlide><FlashSaleCard/></SwiperSlide>
                        <SwiperSlide><FlashSaleCard/></SwiperSlide>
                        <SwiperSlide><FlashSaleCard/></SwiperSlide>
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