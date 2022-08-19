import React, { useState } from 'react'
import Lottie from 'react-lottie'; //import react-lottie
import BookEmptty from "./BookEmptty.json"
import { useSelector } from 'react-redux';

import myStyle from './BookEmpty.module.css';
import { Link } from "react-router-dom" 

function BookEmpty(props) {

    const theme = useSelector((state) => state.theme.currentTheme);

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

            <h2 className={`fs-1 font-weight-medium ${theme === "night" ? "text-light" : ""}`}>{props.title}</h2>
                 
                
            </div>
    )
}

export default BookEmpty 