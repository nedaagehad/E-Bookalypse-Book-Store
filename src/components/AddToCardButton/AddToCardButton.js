import React from 'react';
import { booksApi } from '../../store/services';

//CSS Module
import classes from './AddToCardButton.module.css';

//Icons
import { BsFillHeartFill } from 'react-icons/bs';
// popup
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

const AddToCardButton = props => {
    const addedToCart = () => toast("Added To Cart Successfully");
    const boughtItAlready = () => toast("You Already Bought this book before");
    const removedFromWishList = () => toast("Item Removed From Wish List Successfully");
    const addedToWishList = () => toast("Added To WishList Successfully");
    const pleaseLogin = () => toast("Please Login First");

    const { book, collection } = props
    const [addToCart] = booksApi.useAddToCartMutation()
    const [addToWishList] = booksApi.useAddToWishListMutation()
    const [removeFromWishList] = booksApi.useRemoveFromWishListMutation()
    const authState = useSelector(state => state.auth.userRole);

    let addToCartFun = (bookData) => {
        let books = []
        let collections = []
        let collectionObject
        if (bookData.book !== undefined) {
            books.push(bookData.book)
        }
        if (bookData.collection !== undefined) {
            bookData.collection.collectionBooks.forEach((book) => {
                collections.push(book._id)
            })
            collectionObject = {
                "id": bookData.collection.collectionID,
                "collectionBooks": collections

            }
        }
        console.log(bookData.collection)

        addToCart({ bookId: bookData.book, collectionObject: collectionObject }).then((re) => {
            if (re.data) {

                // eslint-disable-next-line
                { addedToCart() }

            } else {
                const alreadyinCart = () => toast.error(re.error.data.message);

                // eslint-disable-next-line
                { alreadyinCart() }
            }
        }
        )



    }

    let addToWishListFun = (bookData) => {
        let books = []
        let collections = []

        if (bookData.book !== undefined) {
            books.push(bookData.book)
        }
        if (bookData.collection !== undefined) {
            // collections.push(bookData.collection)
            bookData.collection.collectionBooks.forEach((book)=>{
                collections.push(book._id)
            })
            // console.log(bookData.collection.collectionBooks)
        }
        // console.log(collections)
        addToWishList({ bookIds: books, collectionIds: collections }).then((re) => {
            if (re.data) {

                const addedToWishList = () => toast("Added To WishList Successfully");

                // eslint-disable-next-line
                { addedToWishList() }
            } else {

                const alreadyInwishList = () => toast(re.error.data.message);

                // eslint-disable-next-line
                { alreadyInwishList() }
            }
        }
        )
    }

    const removeFromWishListFun = (bookData) => {

        let books = []
        let collections = []


        if (bookData.book !== undefined) {

            books.push(bookData.book)
        }
        if (bookData.collection !== undefined) {
            collections.push(bookData.collection)
        }

        removeFromWishList({ bookIds: books, collectionIds: collections }).then((re) => {
            if (re.data) {

                const removedFromWishList = () => toast("Item Removed From Wish List Successfully");

                // eslint-disable-next-line
                { removedFromWishList() }
            } else {
                const alreadyDeletedFromWishList = () => toast(re.error.data.message);

                // eslint-disable-next-line
                { alreadyDeletedFromWishList() }
            }
        }
        )

    }

    const hasBook = () => {
        boughtItAlready()
    }
    let navigate = useNavigate()
    let loginFirst = ()=>{
                // eslint-disable-next-line
                { pleaseLogin() }
                navigate("/login")
    }
    if(authState == 'regUser' || authState == ''){
        if(authState == ''){
            return(
                <div className={ props.relatedToAuth ? ` mt-3 pe-3 ms-3 mb-3 ${classes.action}` :`mt-3 ${classes.action}`}>
                    
                        <button onClick={() => loginFirst()}><i className={" col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>                        
                        <button onClick={() => loginFirst()} className={classes.favorite}><BsFillHeartFill /></button>
                   
                </div>
            )
        }else{

            return (
                <div className={ props.relatedToAuth ? ` mt-3 pe-3 ms-3 mb-3 ${classes.action}` :`mt-3 ${classes.action}`}>
                    
                    <button onClick={!props.bookShelf ? () => addToCartFun({ book, collection }) : () => boughtItAlready()}><i className={" col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
                    {props.fav
                        ?
                        <button onClick={() => removeFromWishListFun({ book, collection })} style={{ color: "var(--main-purple)" }} className={classes.favorite}><BsFillHeartFill /></button>
                        :
                        <button onClick={() => addToWishListFun({ book, collection })} className={classes.favorite}><BsFillHeartFill /></button>
                    }
                </div>
            )
        }
    }
}
export default AddToCardButton;
