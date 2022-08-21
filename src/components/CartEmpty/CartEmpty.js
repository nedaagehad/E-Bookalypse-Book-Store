import React from 'react'
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
        animationData: CartLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }


    return (
        <div>

            <div className={`${myStyle.emptycart}`}>

                <div className={`${myStyle.besketEmp}`}>
                    <Lottie options={cartObj}
                        isStopped={false}
                        isPaused={false}
                    />
                </div>

                <h2 className={`fs-1 font-weight-medium ${theme === "night" ? "text-light" : "text-dark"}`}>Your Cart is Empty!</h2>
                <div className="justify-content-center align-items-center d-flex ">
                    <Link to="/categories/category">
                        <button className={`${myStyle.saveBtn} btn justify-content-center align-items-center p-3 m-4`}>Go to Books</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CartEmpty