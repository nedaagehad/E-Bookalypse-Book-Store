
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import classes from './BookCard.module.css'
// <<<<<<< HEAD
import storage from '../../Firebase/firebaseImage';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';
import AddToCardButton from '../AddToCardButton/AddToCardButton'
import { booksApi } from '../../store/services';

const BookCard = props => {
  // console.log(props)
  const [images, setImages] = useState()
  const theme = useSelector((state) => state.theme.currentTheme);


  useEffect(() => {
    const starsRef = ref(storage, `/uploads/books/poster/${props.book.poster}`);
    getDownloadURL(starsRef).then((url) => {
      const newUrl = url

      setImages(newUrl)

    }).catch((error) => { console.log(error) });
  }, []);



  return (
    <div className={theme === "night" ? classes.cardNight : classes.card}>
      <div className={classes.BookCard}>
        <div className={theme === "night" ? classes.cardNight : classes.card}>
          <div className={classes.poster}>
            <Link to={'/books/BookDetails/'+props.book._id} >
              <div className={classes.poster_overlay}></div>
            </Link>
            <img className={classes.Book_Poster} src={images} alt={props.book.title} />
          </div>
          <h5 className={theme === "night" ? classes.titleNight : ""}>{props.book.title}</h5>
          <h3>${props.book.price}</h3>
          <AddToCardButton book={props.book._id} fav={props.fav ? props.fav : false}/>
        </div>
      </div>
    </div>
  )
}

export default BookCard