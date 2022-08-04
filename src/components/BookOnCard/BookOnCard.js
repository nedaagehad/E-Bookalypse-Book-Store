import React from 'react'
import classes from './BookOnCard.module.css'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import image from '../../assets/4.jpg'
const BookOnCard = props => {
    return (
        <div className={`col-12 ${classes.card}`}>
            <div className={`row`}>
                <div className={`col-8`}>
                    <div className={`row`}>
                        <div className={`col-3`}>
                            <img src={image}/>
                        </div>
                        <div className={`col-9 ${classes.details}`}>
                            <h3>Book Name</h3>
                            <p>Book Auther</p>
                        </div>
                    </div>
                </div>
                <div className={`col-2 ${classes.price}`}>
                    <h4>Total Price</h4>
                </div>
                <div className={`col-2 ${classes.delete}`}>
                    <button><RiDeleteBin5Fill/></button>
                </div>
            </div>  
        </div>
    )
}
export default BookOnCard;