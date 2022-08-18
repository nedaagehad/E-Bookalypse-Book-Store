import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import styles from '../TrendingBooksUp.module.css';
import storage from '../../../Firebase/firebaseImage';
import loadPoster from './bookPoster.gif' 

import SwiperCore, { Autoplay, Navigation, Pagination,EffectCoverflow } from "swiper";
import { Link } from 'react-router-dom';
const SingleBook = (props) => {
  
  SwiperCore.use([Autoplay])

  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      
          if (image) {
            setLoading(false);
        }
  });
  const starsRef = ref(storage, `/uploads/books/poster/${props.book.poster}`);
  getDownloadURL(starsRef).then( (url)=>{

  setImage(url)
   
  }).catch((error) => { console.log(error) });
  
  return (
    
    <Link to={'/books/BookDetails/'+props.book._id}  className={styles.slideImg}>    
      {
        loading ?
          <img src={loadPoster} className={styles.trendBook} />
          :
          <img src={image} className={styles.trendBook} />
      }
    </Link>
    
  
  )
}

export default SingleBook