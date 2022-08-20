import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
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
    const getWishList = booksApi.useGetWishListQuery();

    const [prevDis, setPrevDis] = useState(false);
    const [nextDis, setNextDis] = useState(true);
    // eslint-disable-next-line
    const { data, isLoading, error } = booksApi.useGetAllBooksQuery()
    const [flashSales, setFlashSales] = useState()
    const [wishList, setWishList] = useState();

    useEffect(() => {
        if (data) {
            setPrevDis(false);
            setNextDis(true);
            setFlashSales(data.data)
        }

        if (getWishList.data) {
            setWishList(getWishList.data.wishList)
        }
    }, [data, getWishList.data]);

    return (
        <div className={`${theme === "night" ? styles.flashSaleNight : styles.flashSale} mt-3`}>
            <div className="container">
                <div className="row py-5">
                    <div className='col-12 col-lg-3 text-white'>
                        <h3>Flash Sale</h3>
                        <small>Catch our interesting Sales before timer runs off!</small>
                        <CountDown />
                    </div>
                    <div className='col-12 col-lg-9 position-relative align-items-center'>
                        <Swiper
                            spaceBetween={5}
                            slidesPerView={2}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".prev"
                            }}

                            onActiveIndexChange={({ realIndex }) => {
                                if (realIndex >= 1) {
                                    setPrevDis(true);
                                }

                                if (realIndex > 3) {
                                    setNextDis(false);
                                }
                            }}

                            onReachEnd={() => {
                                setNextDis(false);
                                setPrevDis(true);
                            }}
                            onReachBeginning={() => {
                                setPrevDis(false);
                                setNextDis(true);
                            }}

                        >
                            {/* eslint-disable-next-line */}
                            {flashSales ? flashSales.map((b) => {
                                if (b.promotion.length > 0) {
                                    return (
                                        <SwiperSlide key={b._id}>
                                            <FlashSaleCard book={b} fav={!wishList ? false : wishList.bookItems.filter((book) => book._id === b._id).length > 0 ? true : false} />
                                        </SwiperSlide>
                                    )
                                }
                            }) : null}

                        </Swiper>
                        <i className={`${styles.prev} prev ${!prevDis ? "opacity-0" : ""} bi bi-arrow-left`}></i>
                        <i className={`${styles.next} next ${!nextDis ? "opacity-0" : ""} bi bi-arrow-right`}></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FlashSaleSlider;