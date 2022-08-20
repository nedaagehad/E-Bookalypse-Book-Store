import React from 'react'
import Lottie from 'react-lottie'; //import react-lottie
import BookEmptty from "./BookEmptty.json"
import { useSelector } from 'react-redux';

import myStyle from './BookEmpty.module.css';

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

                <div className={`${myStyle.booksEmp}`}>
                    <Lottie options={BookEmptyObj} //add the lottie object to lottie options 
                        isStopped={false}
                        isPaused={false}
                    />
                </div>
            <h2 className={`fs-1 font-weight-medium ${theme === "night" ? "text-light" : ""}`}>{props.title}</h2>
                 
                
            </div>
    )
}

export default BookEmpty 