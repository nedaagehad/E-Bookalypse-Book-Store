import React,{useState,useEffect} from 'react'
import storage from '../../../Firebase/firebaseImage';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import SwiperCore, { Autoplay, Navigation, Pagination,EffectCoverflow } from "swiper";
import { Link } from 'react-router-dom';
import styles from '../RelatedToAuther.module.css'
import loadPoster from './bookPoster.gif' 

const SingleBookAuthor = (props) => {
    const {wbook} = props;
    SwiperCore.use([Autoplay])

    const [image, setImage] = useState()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        
            if (image) {
                setLoading(false);
            }
    });
    const starsRef = ref(storage, `/uploads/books/poster/${props.wbook.poster}`);
    getDownloadURL(starsRef).then( (url)=>{

    setImage(url)
     
   }).catch((error) => {console.log(error)});
  return (
      <Link to={'/books/BookDetails/' + wbook._id} className={styles.slideImg}>
          {
              loading ?
                  <img src={loadPoster} className={styles.trendBook} />
                  :
                  <img className={styles.trendBook} src={image} alt={wbook.title} />
          }
         <div className={styles.details}>
              <div className={styles.prices}>
                  <h3>${wbook.price}</h3>
                  <h6><del>$19.56</del></h6>
              </div>
              <div className={styles.action}>
                  <button> <i className={styles.basketIcon + " col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
              </div>
      </div>
  </Link>
  )
}

export default SingleBookAuthor