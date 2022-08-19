import React, { useState } from 'react'
import Lottie from 'react-lottie'; //import react-lottie
import WishlistLottie from "./wishlistEmpty.json"
// import WishlistLottie from "./BooksLoading.json"


import myStyle from './WishlistEmpty.module.css';
import { Link } from "react-router-dom" 

function WishlistEmpty() {
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

                
                <Lottie options={WishlistObj} //add the lottie object to lottie options 
                    height={400}
                    width={400}
                    isStopped={false}
                    isPaused={false}
                />

                <h2 className="fs-1 font-weight-medium text-center pt-0">Your Wishlist is Empty!</h2>
                 <div className="justify-content-center align-items-center d-flex ">
               <Link to="/wishlist">
                    <button className={`${myStyle.saveBtn} btn justify-content-center align-items-center p-3 m-4`}>Go to Books</button>
               </Link>
                 </div>
                
            </div>

        </div>
    )
}

export default WishlistEmpty 