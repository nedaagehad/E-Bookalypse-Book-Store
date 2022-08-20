import React from 'react'
import classes from './Preloader.module.css'
import Lottie from 'react-lottie'; //import react-lottie
import rocket from "./93413-rocket-purple.json" //import lottie animation Json file
import { useSelector } from 'react-redux';

const Preloader = ()=> {
    //make a lottie animation oject 
    const theme = useSelector((state) => state.theme.currentTheme);
    let PreloaderObj = { 
        loop: true,
        autoplay: true,
        animationData : rocket, 
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }


    return (
        <div className={`mainContent ${theme === "night" ? "bg-dark" : ""}`}>
            <div className={classes.rocket}>     
                <Lottie options={PreloaderObj} //add the lottie object to lottie options 
                   
                    isStopped={false}
                    isPaused={false}
                /> 
            </div>
        </div>
    )
}

export default Preloader 