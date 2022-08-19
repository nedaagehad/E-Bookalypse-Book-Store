import React, { useState } from 'react'
import { Link } from "react-router-dom" 
import Lottie from 'react-lottie'; //import react-lottie
import CartLottie from "./newCart.json" //import lottie animation Json file
import { useSelector } from 'react-redux';
import myStyle from './CartEmpty.module.css';

function CartEmpty() {
    const theme = useSelector((state) => state.theme.currentTheme);
    //make a lottie animation oject 
    let cartObj = { 
        loop: true,
        autoplay: true,
        animationData : CartLottie, 
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }


    return (
        <div>

            <div className={`${myStyle.emptycart} pb-2`}>

                
                <Lottie options={cartObj}
                    height={400}
                    width={400}
                    isStopped={false}
                    isPaused={false}
                />


                 <h2  className={`fs-1 font-weight-medium ${theme === "night" ? "text-light" : ""}`} className="fs-1 font-weight-medium text-center">Your Cart is Empty!</h2>
                 <div className="justify-content-center align-items-center d-flex ">
               <Link to="/books">
                    <button className={`${myStyle.saveBtn} btn justify-content-center align-items-center p-3 m-4`}>Go to Books</button>
               </Link>
                 </div>

            </div>
        </div>
    )
}

export default CartEmpty