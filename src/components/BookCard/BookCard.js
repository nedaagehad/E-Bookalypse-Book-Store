
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import storage from '../../Firebase/firebaseImage';
import { ref, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';
import loadPoster from './bookPoster.gif' 

//CSS Module
import classes from './BookCard.module.css';

//Components
import AddToCardButton from '../AddToCardButton/AddToCardButton';

const BookCard = props => {

  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);
  console.log(props.bookShelf)
  useEffect(() => {

          if (images) {
              setLoading(false);
          }
  });
  const starsRef = ref(storage, `/uploads/books/poster/${props.book.poster}`);
  getDownloadURL(starsRef).then((url) => {
    const newUrl = url
    setImages(newUrl)
  }).catch((error) => { console.log(error) });
  const theme = useSelector((state) => state.theme.currentTheme);


  return (
    <div className={theme === "night" ? classes.cardNight : classes.card}>
          <div className={classes.poster}>
            <Link to={'/books/BookDetails/'+props.book._id} >
              <div className={classes.poster_overlay}></div>
           </Link>
        {
          loading ?
            <img className={classes.Book_Poster} src={loadPoster} />
            :
            <img className={classes.Book_Poster} src={images} alt={props.book.title} />
        }
          </div>
      <h5 className={theme === "night" ? classes.titleNight : ""}>{
        props.book.title.length > 30 ?
          
          props.book.title.substring(0, 30) + "..."
          :
          props.book.title
      }</h5>
          <h3>${props.book.price}</h3>
          <AddToCardButton bookShelf={props.bookShelf ? true : false} book={props.book._id} fav={props.fav ? props.fav : false}/>
    </div>
  )
}

export default BookCard;