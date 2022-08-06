import React, { useEffect, useState } from 'react'
import classes from './CategoryCard.module.css'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import storage from '../../Firebase/firebaseImage';
import { Link } from 'react-router-dom';

const CategoryCard = props => {
    const {category} = props
    const [image,setImage]= useState()
    const starsRef = ref(storage, `/uploads/categories/${category.icon}`);
    let imageurl = ' ';
     getDownloadURL(starsRef).then( (url)=>{
      const newUrl = url
   
      setImage(newUrl)
      
    }).catch((error) => {console.log(error)});

    return (
        <>
        <Link to={'/categories/category/'+category._id } className={`col-md-4 col-sm-12 col-xs-12`}>
      
                <div className={classes.Category_Card}>
                    <div className={classes.Card_Overlay}>
                        <h2>{category.title}</h2>
                    </div>
                    <img src={image} alt={category.title}/>
                </div>
          
        </Link>
        </>
  )
}

export default CategoryCard