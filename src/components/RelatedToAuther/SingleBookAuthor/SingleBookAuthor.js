import React,{useState,useEffect} from 'react'
import storage from '../../../Firebase/firebaseImage';
import { ref, getDownloadURL } from "firebase/storage";
import SwiperCore, { Autoplay } from "swiper";
import { Link } from 'react-router-dom';
import styles from '../RelatedToAuther.module.css'
import loadPoster from './bookPoster.gif' 
import AddToCardButton from '../../AddToCardButton/AddToCardButton';

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
     
   });

  return (
      <Link to={'/books/BookDetails/' + wbook._id} className={styles.slideImg}>
          {
              loading ?
                  <img src={loadPoster} className={styles.trendBook} alt={wbook.title} />
                  :
                  <img className={styles.trendBook} src={image} alt={wbook.title} />
          }
         <div className={styles.details}>
              <div className={styles.prices}>
                {/* data[0].price -  data[0].price * promotions[0].discount_rate */}
                {wbook.promotion[0] 
                ?
                <>
                    <h3>${wbook.price - wbook.price*wbook.promotion[0].discount_rate }</h3>
                    <h6><del>${wbook.price}</del></h6>
                </>
                 
                 : 
                 <h3>${wbook.price}</h3>
                 }
           
              </div>
              <AddToCardButton 
              book={props.wbook._id}  
              fav={props.fav ? props.fav : false} 
              relatedToAuth={true} 
              bookShelf={props.bookShelf ? true : false} 
              />
      </div>
  </Link>
  )
}

export default SingleBookAuthor