import React from 'react'
import { useSelector } from 'react-redux'
import classes from './BookCard.module.css'

const  BookCard = props => {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`col-md-4 col-sm-12 ${classes.BookCard}`}>
      <div className={theme === "night" ? classes.cardNight : classes.card}>
            <div className={classes.poster}>
                <div className={classes.poster_overlay}>
                <button>Show Details</button>
                </div>
                <img className={classes.Book_Poster} src={props.img} alt={props.alt}/>
            </div>
            <h5>{props.alt}</h5>
            <h3>{props.price}</h3>
            <button>Add to Card <i className={classes.basketIcon + " col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
        </div>
    </div>
  )
}

export default BookCard