import React, { useState, useEffect,useRef } from 'react'
import Lottie from 'react-lottie'; //import react-lottie
import NotFoundMsg from "./NotFound.json"
import classes from './NotFound.module.css'

function NotFoundComp() {
    
    const [text, setText] = useState('');
    const string = 'Paage Is Not Found :(', index = useRef(0);
    
    useEffect(() => {
        function tick() {
            setText(prev => prev + string[index.current]);
            index.current++;
        }
        if (index.current < string.length-1) {
          let addChar = setInterval(tick, 200);
          return () => clearInterval(addChar);
        }
    }, [text]);
    
    //make a lottie animation object 
    let NotFoundObj = { 
        loop: true,
        autoplay: true,
        animationData : NotFoundMsg, 
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
                <div className={classes.space}>
                    <Lottie options={NotFoundObj} //add the lottie object to lottie options 
                        height={520}
                        width={520}
                        isStopped={false}
                        isPaused={false}
                />
                <h1>{text}</h1>
                </div>

    )
}

export default NotFoundComp 