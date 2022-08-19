import React,{useState,useEffect} from 'react'
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../../../Firebase/firebaseImage';
import styles from  '../HomeCategories.module.css';
import { Link } from 'react-router-dom';
import loadPoster from './bookPoster.gif' 

const SingleCategory = (props) => {
    
    const [image,setImage] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        
        if (image) {
            setLoading(false);
        }
       
    });
    const starsRef = ref(storage, `/uploads/categories/${props.category.icon}`);
    getDownloadURL(starsRef).then( (url)=>{
    setImage(url)
   }).catch((error) => {console.log(error)});
    return (
  <>
    {
        loading ? 
        <div className={styles.categoryCard} style={{backgroundImage: "url("+loadPoster+')' }}>
            <Link to={'/categories/category/'+props.category._id} >
                <div  className={styles.categoryData}>
                <div className={styles.categorytextandtitle}>
                <h4 className={styles.h4}>{props.category.title[0].toUpperCase() + props.category.title.substring(1)}</h4>
                </div>
                </div>
            </Link>
        </div > 
        :
    <div className={styles.categoryCard} style={{backgroundImage: "url("+image+')' }}>
        <Link to={'/categories/category/'+props.category._id} >
            <div  className={styles.categoryData}>
            <div className={styles.categorytextandtitle}>
            <h4 className={styles.h4}>{props.category.title[0].toUpperCase() + props.category.title.substring(1)}</h4>
            </div>
            </div>
        </Link>
    </div > }
    </>
  )
}

export default SingleCategory