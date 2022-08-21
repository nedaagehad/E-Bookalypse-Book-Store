/* eslint-disable */
import { skipToken } from '@reduxjs/toolkit/dist/query';
import React,{useState,useEffect} from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { booksApi } from '../../store/services';
import classes from './CheckoutSummary.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutSummary = props => {

    const theme = useSelector((state) => state.theme.currentTheme);


    const [url,setUrl] = useState()
    const [isUrl,setIsUrl] = useState(false)
    const [mySkipState, setSkipState] = useState(skipToken)
    // const getCheckOutLink = booksApi.useCheckoutQuery(mySkipState)
        const [getCheckOutLink] = booksApi.useCheckoutMutation()

    let navigate  = useNavigate()

    // useEffect(()=>{
    //     if(getCheckOutLink.data){
    //         setUrl(getCheckOutLink.data.url)
    //     }
    // },[getCheckOutLink.data])


    let getCheckOut = () =>{
        // setSkipState(1)
        // if(getCheckOutLink.data){ 
        //     window.open(getCheckOutLink.data.url)
        // }
        getCheckOutLink().then((r)=>{
            if(r.data){
                const redirectToPayment = () =>  toast("Redirecting to Payment Page...");

                /* eslint-disable-next-line */
                {redirectToPayment()} /* eslint-disable-line */                
                window.open(r.data.url)
            }
        })
    }
    

    return (
        <div className={`col-12 ${theme === "night" ? classes.checkoutCardNight : classes.checkoutCard}`}>
            <div className={`row`}>
                <div className={`col-md-7 col-sm-12 ${classes.summary}`}>
                {/* eslint-disable-next-line */}
                    <h1>Checkout Summary 🚀</h1>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.</p>
                </div>
                <div className={`col-md-4 col-sm-12 ${classes.summaryDetails}`}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Total</td>
                                <td>${props.Total}</td>
                            </tr>

                        </tbody>
                       
                    </table>
                            <button onClick={()=>getCheckOut()}  className='btn btn-secondary' > Check Out</button>
                            
                </div>
            </div>
        </div>
    )
}
export default CheckoutSummary;