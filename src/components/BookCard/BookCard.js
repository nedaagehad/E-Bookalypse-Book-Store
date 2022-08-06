import React,{useState,useEffect} from 'react'
import classes from './BookCard.module.css'
import storage from '../../Firebase/firebaseImage';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const  BookCard = props => {
  // console.log(props.book)
  const [ images,setImages] = useState()
  useEffect(() => {
    const starsRef = ref(storage, `/uploads/books/poster/${props.book.poster}`);
     getDownloadURL(starsRef).then( (url)=>{
      const newUrl = url
   
      setImages(newUrl)
      
    }).catch((error) => {console.log(error)});
  }, []);
  return (
    <div className={`col-md-4 col-sm-12 ${classes.BookCard}`}>
      <div className={classes.card}>
            <div className={classes.poster}>
                <div className={classes.poster_overlay}>
                <button>Show Details</button>
                </div>
                <img className={classes.Book_Poster} src={images} alt={props.alt}/>
            </div>
            <h5>{props.book.title}</h5>
            <h3> $ {props.book.price} </h3>
            <button>Add to Card <i className={classes.basketIcon + " col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
        </div>
    </div>
  )
}

export default BookCard