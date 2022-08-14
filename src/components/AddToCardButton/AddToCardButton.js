
import React from 'react'
import classes from './AddToCardButton.module.css'
import { BsFillHeartFill } from 'react-icons/bs'
import { booksApi } from '../../store/services'
import { useDispatch } from 'react-redux'
import { increaseCount } from '../../store/reducers/cartReducer/CartReducer'

const AddToCardButton = props => {
    const {book,collection} = props
    const [addToCart,response] =booksApi.useAddToCartMutation()
    const [addToWishList] =booksApi.useAddToWishListMutation()
    const [removeFromWishList] =booksApi.useRemoveFromWishListMutation()

    // console.log(props.fav)
    // let dispatch = useDispatch()
    // console.log(book)
    let addToCartFun =  (bookData) => {
        // console.log(bookData)
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
        console.log(bookData)
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
        console.log("removed")
        console.log(bookData.book)
      

        removeFromWishList({bookIds:bookData.book}).then((re)=>
        
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
        <div className={classes.action}>
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
