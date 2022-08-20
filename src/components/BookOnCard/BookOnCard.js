import React, { useEffect, useState } from 'react'
import classes from './BookOnCard.module.css'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import storage from '../../Firebase/firebaseImage'
import { getDownloadURL, ref } from 'firebase/storage'
import { booksApi } from '../../store/services'
import { useDispatch } from 'react-redux'
import { removeFromCartReducer } from '../../store/reducers/cartReducer/CartReducer'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookOnCard = props => {
    // console.log(props.data)
    const theme = useSelector((state) => state.theme.currentTheme);

    const [bookImages,setBookImages] = useState()
    useEffect(() => {
        const starsRef = ref(storage, `/uploads/books/poster/${props.data.poster}`);
        getDownloadURL(starsRef).then( (url)=>{
         const newUrl = url
      
         setBookImages(newUrl)
         
       }).catch((error) => {console.log(error)});




    }, []);

    const [removeFromCart ,response] = booksApi.useRemoveFromCartMutation()
    // // const {refetch} = booksApi.useGetCartMutation()
    // const {refetch} = booksApi.useGetCartQuery()
    // let dispatch = useDispatch()


    const removeItem = (bookData) =>{
        console.log(bookData)
        
        removeFromCart({bookIds:[bookData],collectionIds:[bookData]}  ).then((r)=>{
            if(r.data){
                const removedFromCart = () =>  toast("Book Removed from Cart");

                {removedFromCart()}
            }else{
                const err = () =>  toast(r.error.data.message);

                {err()}
            }
            console.log(r)
        }).catch((err)=>{
            console.log(err)
        })
    
    }


    return (
        <div className={`col-12 ${theme === "night" ? classes.cardNight : classes.card}`}>
             
            <div className={`row`}>
                <div className={`col-8`}>
                    <div className={`row`}>
                        <div className={`col-3`}>
                            <img src={bookImages}/>
                        </div>
                        <div className={`col-9 ${classes.details}`}>

                            <h3 className={theme === "night" ? "text-light" : ""}>{props.data.title}</h3>
                            <p className={theme === "night" ? classes.lightTxt : ""}>{props.data.bookAuther}</p>
                        </div>
                    </div>
                </div>
                <div className={`col-2 ${classes.price}`}>
                    {
                        props.data.promotion ? 
                         (
                                <h4>${props.data.price - props.data.promotion.discount_rate * props.data.price }</h4>
                        )
                        :
                        (
                            <h4>${props.data.price}</h4>
                        )
                    }
                    
                </div>
                <div className={`col-2 ${theme === "night" ? classes.deleteNight : classes.delete}`}>
                <button onClick={()=>removeItem(props.data._id)}><RiDeleteBin5Fill/></button>
                </div>
            </div>  
        </div>
    )
}
export default BookOnCard;