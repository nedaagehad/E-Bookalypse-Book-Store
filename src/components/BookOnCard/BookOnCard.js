import React, { useEffect, useState } from 'react'
import classes from './BookOnCard.module.css'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import storage from '../../Firebase/firebaseImage'
import { getDownloadURL, ref } from 'firebase/storage'
import { booksApi } from '../../store/services'
import { useDispatch } from 'react-redux'
import { removeFromCartReducer } from '../../store/reducers/cartReducer/CartReducer'
const BookOnCard = props => {
    console.log(props.data)

    const [bookImages,setBookImages] = useState()
    useEffect(() => {
        const starsRef = ref(storage, `/uploads/books/poster/${props.data.poster}`);
        getDownloadURL(starsRef).then( (url)=>{
         const newUrl = url
      
         setBookImages(newUrl)
         
       }).catch((error) => {console.log(error)});




    }, []);

    const [removeFromCart ,response] = booksApi.useRemoveFromCartMutation()

    let dispatch = useDispatch()


    const removeItem = (bookData) =>{
        console.log(bookData)
        
        removeFromCart({bookIds:bookData}  ).then((r)=>{
       
                   dispatch(removeFromCartReducer({bookIds:bookData}))
             
        })
    
    }

    return (
        <div className={`col-12 ${classes.card}`}>
            <div className={`row`}>
                <div className={`col-8`}>
                    <div className={`row`}>
                        <div className={`col-3`}>
                            <img src={bookImages}/>
                        </div>
                        <div className={`col-9 ${classes.details}`}>
                            <h3>{props.data.title}</h3>
                            <p>{props.data.bookAuther}</p>
                        </div>
                    </div>
                </div>
                <div className={`col-2 ${classes.price}`}>
                    <h4>${props.data.price}</h4>
                </div>
                <div className={`col-2 ${classes.delete}`}>
                    <button onClick={()=>removeItem(props.data._id)}><RiDeleteBin5Fill/></button>
                </div>
            </div>  
        </div>
    )
}
export default BookOnCard;