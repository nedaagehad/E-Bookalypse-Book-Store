import { getDownloadURL, ref } from 'firebase/storage';
import React, { useState ,useEffect} from 'react'
import storage from '../../Firebase/firebaseImage';
import classes from './Shelf.module.css'
import loadPoster from './bookPoster.gif';
const EachBookShelf = (props) => {
    const [image,setImage] = useState()
    const [pdf,setPdf] = useState()
    const [loading,setLoading]= useState(true)
    useEffect(() => {
        if(image){
            setLoading(false)
        }
        const starsRef = ref(storage, `/uploads/books/poster/${props.book.poster}`);
        getDownloadURL(starsRef).then( (url)=>{
      
        setImage(url)
         
        }).catch((error) => { console.log(error) });
        const pdf = ref(storage, `/uploads/books/pdf/${props.book.source}`);
        getDownloadURL(pdf).then( (url)=>{
      
            setPdf(url)
         
        }).catch((error) => { console.log(error) });
    }, [image]);

  return (
    <div  className={`col-lg-2 col-md-4 col-sm-4 ${classes.book}`}>
        <a target="_blank" href={pdf} download >
            {
                loading ? 
                <img src={loadPoster}/>
                
                :
                <img src={image}/>
            }
        </a>
    </div>
  )
}

export default EachBookShelf