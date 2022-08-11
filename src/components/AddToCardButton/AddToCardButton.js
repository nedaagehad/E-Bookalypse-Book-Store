
import React from 'react'
import classes from './AddToCardButton.module.css'
import { BsFillHeartFill } from 'react-icons/bs'

const AddToCardButton = props => {
    return (
        <div className={classes.action}>
            <button><i className={" col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
            <button className={classes.favorite}><BsFillHeartFill/></button>
        </div>
    )
}
export default AddToCardButton;
