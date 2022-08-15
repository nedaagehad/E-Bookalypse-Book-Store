import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { booksApi } from '../../store/services';
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = props => {

    const theme = useSelector((state) => state.theme.currentTheme);

    const {data,isLoading,error} = booksApi.useCheckoutQuery()
    const [url,setUrl] = useState()
    const [isUrl,setIsUrl] = useState(false)

    let navigate  = useNavigate()
    const sendCart = ()=>{

        console.log(data)
        console.log(error)
        // navigate(data.url)
        navigate(data.url, { replace: true })
    }
    useEffect(() => {
        if(data){
            setUrl(data.url)
        }
        if(isUrl){
            navigate(data.url, { replace: true })
        }
    }, [data]);
    return (
        <div className={`col-12 ${theme === "night" ? classes.checkoutCardNight : classes.checkoutCard}`}>
            <div className={`row`}>
                <div className={`col-md-7 col-sm-12 ${classes.summary}`}>
                    <h1>Checkout Summary 🚀</h1>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.</p>
                </div>
                <div className={`col-md-4 col-sm-12 ${classes.summaryDetails}`}>
                    <table>
                            {/* <tr>
                                <td className={theme === "night" ? classes.lightTxt : ""}>Subtotal</td>
                                <td className={theme === "night" ? "text-light" : ""}>${props.subTotal}</td>
                            </tr> */}
                            {/* <tr>
                                <td className={theme === "night" ? classes.lightTxt : ""}>Tax</td>
                                <td className={theme === "night" ? "text-light" : ""}>${props.tax}</td>
                            </tr> */}
                            <tbody>


                            <tr>
                                <td>Total</td>
                                <td>${props.Total}</td>
                            </tr>

                            </tbody>
                            {/* <Link to={url ? url : "null"}> */}

                                <button onClick={()=>window.open(url ? url : null)}  className='btn btn-secondary' > Check Out</button>
                            {/* </Link> */}
                    </table>
                </div>
            </div>
        </div>
    )
}
export default CheckoutSummary;