
import React from 'react';
import { booksApi } from '../../store/services';

//CSS Module
import classes from './AddToCardButton.module.css';

//Icons
import { BsFillHeartFill } from 'react-icons/bs';
// popup
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddToCardButton = props => {
    const addedToCart = () =>  toast("Added To Cart Successfully");

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
                    {addedToCart()}
                   
                    // dispatch(increaseCount())
                }else{
                    const alreadyinCart = () =>  toast(re.error.data.message);

                    {alreadyinCart()}
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
                    const addedToWishList = () =>  toast("Added To WishList Successfully");

                    {addedToWishList()}
                    console.log("error")
                    // dispatch(increaseCount())
                }else{
                    console.log("error")
                    const alreadyInwishList = () =>  toast(re.error.data.message);

                    {alreadyInwishList()}
                    console.log("error")
                }
            console.log(re)
        }
        )
    }

    const removeFromWishListFun = (bookData) =>{
        console.log("removed")
        console.log(bookData.book)
        let books = []
        let collections = []


        if(bookData.book !== undefined) {

            books.push(bookData.book)
        }
        if(bookData.collection !== undefined) {
            collections.push(bookData.collection)
        }

        removeFromWishList({bookIds:books,collectionIds:collections}).then((re)=>
            
            {
                if(re.data){
                    // dispatch(addToCartReducer(bookData))
                    console.log("right")
                    const removedFromWishList = () =>  toast("Item Removed From Wish List Successfully");

                    {removedFromWishList()}
                    // dispatch(increaseCount())
                }else{
                    console.log("error")
                    const alreadyDeletedFromWishList = () =>  toast(re.error.data.message);

                    {alreadyDeletedFromWishList()}
                }
            console.log(re)
        }
        )
        
    }

    return (
        <div className={`mt-3 ${classes.action}`}>
             <ToastContainer 
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    
                    >
                        
                    </ToastContainer>
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
