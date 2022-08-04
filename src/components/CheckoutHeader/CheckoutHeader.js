import React from 'react'
import classes from './CheckoutHeader.module.css'
import BookOnCard from '../BookOnCard/BookOnCard';

const CheckoutHeader = props => {
    return (
    <>
      <div className={`col-12 ${classes.header}`}>
        <div className={`row`}>
            <div className={`col-8`}>
                <h4>Book</h4>
            </div>
            <div className={`col-4`}>
                <h4>Total Price</h4>
            </div>
        </div>  
        </div>
        <div className={`col-12`}>
            <div className={`row`}>
                {
                    props.data.map(item => {
                            return (
                                <BookOnCard data={item} />
                            )
                    })  
                }
            </div>  
        </div>
        </>
        
    )
}
export default CheckoutHeader;