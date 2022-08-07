import React from 'react'
import classes from './BookOnCard.module.css'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux'

const BookOnCard = props => {

    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className={`col-12 ${theme === "night" ? classes.cardNight : classes.card}`}>
            <div className={`row`}>
                <div className={`col-8`}>
                    <div className={`row`}>
                        <div className={`col-3`}>
                            <img src={props.data.bookPoster}/>
                        </div>
                        <div className={`col-9 ${classes.details}`}>
                            <h3 className={theme === "night" ? "text-light" : ""}>{props.data.bookName}</h3>
                            <p className={theme === "night" ? classes.lightTxt : ""}>{props.data.bookAuther}</p>
                        </div>
                    </div>
                </div>
                <div className={`col-2 ${classes.price}`}>
                    <h4>{props.data.bookPrice}</h4>
                </div>
                <div className={`col-2 ${theme === "night" ? classes.deleteNight : classes.delete}`}>
                    <button><RiDeleteBin5Fill/></button>
                </div>
            </div>  
        </div>
    )
}
export default BookOnCard;