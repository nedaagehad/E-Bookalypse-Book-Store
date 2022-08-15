import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import classes from '../BookCard/BookCard.module.css'
// <<<<<<< HEAD
import storage from '../../Firebase/firebaseImage';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';
import AddToCardButton from '../AddToCardButton/AddToCardButton'
import { booksApi } from '../../store/services';

const CollectionCard = (props) => {
    const theme = useSelector((state) => state.theme.currentTheme);
    const [image,setImage]= useState()
    const {data,isLoading,error} = booksApi.useGetBookByIdQuery(props.data.collectionBooks[0])
    console.log(props.data._id)
    useEffect(() => {  
        if(data){
            console.log(data)
            const starsRef = ref(storage, `/uploads/books/poster/soffer.png`);
             getDownloadURL(starsRef).then( (url)=>{
              const newUrl = url
           
              setImage(newUrl)
              
            }).catch((error) => {console.log(error)});
        }
        

    },[data])
  return (
    <div className={theme === "night" ? classes.cardNight : classes.card}>

    <div className={classes.BookCard}>
      <div className={theme === "night" ? classes.cardNight : classes.card}>
        <div className={classes.poster}>
          <Link to={'/offers'} >
            <div className={classes.poster_overlay}></div>
          
          </Link>
            <img className={classes.Book_Poster } src={image}  alt={props.data.title} />


        </div>
        <h5>{props.data.title}</h5>
        <h3>${props.data.collectionPrice}</h3>
        {/* ***************************************************************************** */}
        <AddToCardButton collection={props.data._id} fav={props.fav ? props.fav : false}/>
      </div>
    </div>
  </div>
  )
}

export default CollectionCard