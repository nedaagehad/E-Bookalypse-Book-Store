import React, { useState } from 'react'
import Lottie from 'react-lottie'; //import react-lottie
import BookEmptty from "./BookEmptty.json"


import myStyle from './BookEmpty.module.css';
import { Link } from "react-router-dom" 

function BookEmpty() {

    let BookEmptyObj = { 
        loop: true,
        autoplay: true,
        animationData : BookEmptty, 
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }


    return (
            <div className={`${myStyle.emptywishlist}`}>

                
                <Lottie options={BookEmptyObj} //add the lottie object to lottie options 
                    height={400}
                    width={400}
                    isStopped={false}
                    isPaused={false}
                />

                <h2 className="fs-1 font-weight-medium text-center pt-0">Your BookShelf is Empty!</h2>
                 <div className="justify-content-center align-items-center d-flex ">
               <Link to="/categories">
                    <button className={`${myStyle.saveBtn} btn justify-content-center align-items-center p-3 m-4`}>Go to Categories</button>
               </Link>
                 </div>
                
            </div>
    )
}

export default BookEmpty 