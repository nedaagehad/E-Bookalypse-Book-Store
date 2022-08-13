
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import classes from './BookCard.module.css'
// <<<<<<< HEAD
import storage from '../../Firebase/firebaseImage';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';
// =======
import AddToCardButton from '../AddToCardButton/AddToCardButton'
// >>>>>>> 064fd04123a5f582be55b3c12a9a48eb0b37d657

const BookCard = props => {
  // console.log(props.book)
  const [images, setImages] = useState()
  const theme = useSelector((state) => state.theme.currentTheme);
  // useEffect(() => {
  //   const starsRef = ref(storage, `/uploads/books/poster/${props.book.poster}`);
  //   getDownloadURL(starsRef).then((url) => {
  //     const newUrl = url

  //     setImages(newUrl)

  //   }).catch((error) => { console.log(error) });
  // }, []);



  return (
    <div className={theme === "night" ? classes.cardNight : classes.card}>
      {/* ******************************HUSSEIN'S DYNAMIC CODE******************************** */}
      {/* <Link to={'/books/BookDetails/'+props.book._id} className={`${classes.BookCard}`}>
            <div className={classes.poster}>
                <div className={classes.poster_overlay}></div>
                <img className={classes.Book_Poster} src={images} alt={props.alt}/>
            </div>
            </Link>
            <h5 className={theme === "night" ? classes.titleNight : ""}>{props.alt}</h5>
            <h3>{props.book.price}</h3> */}
              {/* *************************************************************************** */}

            {/* **********************REHAM'S STATIC CODE***************************** */}
      <div className={classes.BookCard}>
        <div className={classes.card}>
          <div className={classes.poster}>
            <div className={classes.poster_overlay}></div>
            <img className={classes.Book_Poster} src={props.img} alt={props.alt} />
          </div>
          <h5>{props.alt}</h5>
          <h3>{props.price}</h3>
          {/* ***************************************************************************** */}
          <AddToCardButton />
        </div>
      </div>
    </div>
  )
}

export default BookCard