import React,{useState,useEffect} from 'react'
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../../../Firebase/firebaseImage';
import styles from  '../HomeCategories.module.css';
import { Link } from 'react-router-dom';


const SingleCategory = (props) => {
    
    console.log(props)
    const [image,setImage] = useState()
    useEffect(() => {
        const starsRef = ref(storage, `/uploads/categories/${props.category.icon}`);
        getDownloadURL(starsRef).then( (url)=>{
         const newUrl = url
        //  setImages(newUrl)
        setImage(url)
        
       }).catch((error) => {console.log(error)});
    }, []);
    
  return (

    <div className={styles.categoryCard} style={{backgroundImage: "url("+image+')' }}>
        <Link to={'/categories/category/'+props.category._id} >
            <div  className={styles.categoryData}>
            <div className={styles.categorytextandtitle}>
            <h4 className={styles.h4}>{props.category.title}</h4>
            {/* <span className={styles.span}>{props.data[0].Num_of_books ? props.data[0].Num_of_books : "Comming Soon"}</span> */}
            </div>
            </div>
        </Link>
    </div> 
  )
}

export default SingleCategory