import React,{useState,useEffect} from 'react'
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../../../Firebase/firebaseImage';
import styles from  '../HomeCategories.module.css';
import { Link } from 'react-router-dom';


const SingleCategory = (props) => {
    
    const [image,setImage] = useState();

    useEffect(() => {
        const starsRef = ref(storage, `/uploads/categories/${props.category.icon}`);
        getDownloadURL(starsRef).then( (url)=>{
        setImage(url)
       }).catch((error) => {console.log(error)});
    }, []);
    
  return (

    <div className={styles.categoryCard} style={{backgroundImage: "url("+image+')' }}>
        <Link to={'/categories/category/'+props.category._id} >
            <div  className={styles.categoryData}>
            <div className={styles.categorytextandtitle}>
            <h4 className={styles.h4}>{props.category.title[0].toUpperCase() + props.category.title.substring(1)}</h4>
            </div>
            </div>
        </Link>
    </div> 
  )
}

export default SingleCategory