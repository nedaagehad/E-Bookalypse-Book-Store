import React, { useState } from 'react'
import Lottie from 'react-lottie'; //import react-lottie
import WishlistLottie from "./wishlistEmpty.json"
// import WishlistLottie from "./BooksLoading.json"
import { useSelector } from 'react-redux';

import myStyle from './WishlistEmpty.module.css';
import { Link } from "react-router-dom" 

function WishlistEmpty() {
    const theme = useSelector((state) => state.theme.currentTheme);
    //make a lottie animation oject 
    let WishlistObj = { 
        loop: true,
        autoplay: true,
        animationData : WishlistLottie, 
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }


    return (
        <div>

            <div className={`${myStyle.emptywishlist}`}>

                <div className={`${myStyle.heart}`}>
                <Lottie options={WishlistObj} //add the lottie object to lottie options 
                    isStopped={false}
                    isPaused={false}
                />
                </div>
                <h2 className={`fs-1 ${theme === "night" ? "text-light" : ""}`}>Your Wishlist is Empty!</h2>
                
               <Link to="/wishlist">
                    <button className={`${myStyle.saveBtn} btn `}>Go to Books</button>
               </Link>
               
                
            </div>

        </div>
    )
}

export default WishlistEmpty 