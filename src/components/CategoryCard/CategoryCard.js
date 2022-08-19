import React, { useState,useEffect } from 'react';
import { ref, getDownloadURL } from "firebase/storage";
import storage from '../../Firebase/firebaseImage';
import { Link } from 'react-router-dom';
import loadPoster from './bookPoster.gif' 
//CSS Module
import classes from './CategoryCard.module.css';
//Components
// import Preloader from '../Preloader/Preloader';

const CategoryCard = props => {

    const { category } = props;
    const [image, setImage] = useState();

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {

            if (image) {
                setLoading(false);
            }
    });
    const starsRef = ref(storage, `/uploads/categories/${category.icon}`);

    getDownloadURL(starsRef).then((url) => {
        const newUrl = url
        setImage(newUrl)
    }).catch((error) => { console.log(error) });

    return (
        <>
                    <Link to={'/categories/category/' + category._id} className={`col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                        <div className={classes.Category_Card}>
                            <div className={classes.Card_Overlay}>
                                <h2 className='text-center'>{category.title[0].toUpperCase() + category.title.substring(1)}</h2>
                    </div>
                    {
                        loading ?
                            <img src={loadPoster} />
                            :
                            <img src={image} alt={category.title} />
                    }
                        </div>
                    </Link>
        </>
    )
}

export default CategoryCard;