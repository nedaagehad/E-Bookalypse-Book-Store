import React from 'react'
import classes from './BookCard.module.css'
import AddToCardButton from '../AddToCardButton/AddToCardButton'

const  BookCard = props => {
  return (
    <div className={classes.BookCard}>
      <div className={classes.card}>
            <div className={classes.poster}>
                <div className={classes.poster_overlay}></div>
                <img className={classes.Book_Poster} src={props.img} alt={props.alt}/>
            </div>
            <h5>{props.alt}</h5>
            <h3>{props.price}</h3>
            <AddToCardButton/>
        </div>
    </div>
  )
}

export default BookCard