
import React from 'react';
import { booksApi } from '../../store/services';

//CSS Module
import classes from './AddToCardButton.module.css';

//Icons
import { BsFillHeartFill } from 'react-icons/bs';


const AddToCardButton = props => {

    const {book,collection} = props
    const [addToCart] =booksApi.useAddToCartMutation()
    const [addToWishList] =booksApi.useAddToWishListMutation()
    const [removeFromWishList] =booksApi.useRemoveFromWishListMutation()

    
    let addToCartFun =  (bookData) => {
        let books = []
        let collections = []

        if(bookData.book !== undefined) {
            books.push(bookData.book)
        }
        if(bookData.collection !== undefined) {
            collections.push(bookData.collection)
        }

        addToCart({bookIds:books,collectionIds:collections}).then((re)=>
            {
                if(re.data){
                    // dispatch(addToCartReducer(bookData))
                    console.log("right")
                    // dispatch(increaseCount())
                }else{
                    console.log("error")
                }
            console.log(re)
        }
        )
        
      

    }

    let addToWishListFun = (bookData)=>{
        let books = []
        let collections = []

        if(bookData.book !== undefined) {
            books.push(bookData.book)
        }
        if(bookData.collection !== undefined) {
            collections.push(bookData.collection)
        }

        addToWishList({bookIds:books,collectionIds:collections}).then((re)=>
        
            {
                if(re.data){
                    // dispatch(addToCartReducer(bookData))
                    console.log("right")
                    // dispatch(increaseCount())
                }else{
                    console.log("error")
                }
            console.log(re)
        }
        )
    }

    const removeFromWishListFun = (bookData) =>{

        removeFromWishList({bookIds:bookData.book,collectionIds:bookData.collection}).then((re)=>
        
            {
                if(re.data){
                    // dispatch(addToCartReducer(bookData))
                    console.log("right")
                    // dispatch(increaseCount())
                }else{
                    console.log("error")
                }
            console.log(re)
        }
        )
        
    }

    return (
        <div className={`mt-3 ${classes.action}`}>
            <button onClick={()=>addToCartFun({book,collection})}><i className={" col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
            {   props.fav 
                ?
                    <button onClick={()=>removeFromWishListFun({book,collection})} style={{color:"var(--main-purple)"}} className={classes.favorite}><BsFillHeartFill/></button>  
                : 
                    <button onClick={()=>addToWishListFun({book,collection})} className={classes.favorite}><BsFillHeartFill/></button>
            }
        </div>
    )
}
export default AddToCardButton;
