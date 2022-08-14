
import React from 'react'
import classes from './AddToCardButton.module.css'
import { BsFillHeartFill } from 'react-icons/bs'
import { booksApi } from '../../store/services'
import { useDispatch } from 'react-redux'
import { increaseCount } from '../../store/reducers/cartReducer/CartReducer'

const AddToCardButton = props => {
    const {book,collection} = props
    const [addToCart,response] =booksApi.useAddToCartMutation()
    // let dispatch = useDispatch()
    let addToCartFun =  (bookData) => {
        console.log(bookData)
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


    return (
        <div className={classes.action}>
            <button onClick={()=>addToCartFun({book,collection})}><i className={" col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
            <button className={classes.favorite}><BsFillHeartFill/></button>
        </div>
    )
}
export default AddToCardButton;
