import React, { useEffect, useState } from 'react'
import classes from './BookDetailsContainer.module.css'
import AddToCardButton from '../AddToCardButton/AddToCardButton'
import { booksApi } from '../../store/services'
import { addToCartReducer } from '../../store/reducers/cartReducer/CartReducer'
import { useDispatch, useSelector } from 'react-redux'
import loadPoster from './bookPoster.gif'

const BookDetailsContainer = props => {

    // eslint-disable-next-line
    const [addToCart, response] = booksApi.useAddToCartMutation()
    // eslint-disable-next-line
    const cartItems = useSelector(state => state.cart)
    // eslint-disable-next-line
    const cartItemsBookIds = useSelector(state => state.cart.bookIds)
    const theme = useSelector((state) => state.theme.currentTheme);
    const getWishList = booksApi.useGetWishListQuery()
    const [wishList, setWishList] = useState()
    let dispatch = useDispatch()

    useEffect(() => {

        if (getWishList.data) {
            setWishList(getWishList.data.wishList)
        }
    }, [getWishList.data])

    // eslint-disable-next-line
    let addToCartFun = (bookData) => {

        addToCart({ bookIds: bookData }).then((re) => {
            if (re.data) {
                dispatch(addToCartReducer(bookData))
            } 
        }
        )
    }

    return (
        <div className={`col-12`} >
            <div className={classes.BookDetails}>
                <h2 className={`${classes.title}`}>Book Details</h2>
                <div className={`row`}>
                    <div className={`col-md-3 col-sm-12`}>
                        <div className={classes.Book_Poster}>
                            {
                                !props.img ?
                                    <img className="img-thumbnail" src={loadPoster} alt={props.alt} />
                                    :
                                    <img className="img-thumbnail" src={props.img} alt={props.alt} />
                            }
                        </div>
                    </div>
                    <div className={`col-md-9 col-sm-12`}>
                        <div className={classes.Details}>

                            <h1 className={theme === "night" ? "text-light" : ""}>{props.bookName}</h1>
                            <h3>{props.bookAuther}</h3>
                            <p className={theme === "night" ? classes.description : ""}>{props.bookDesc}</p>
                            <h2>${props.bookPriceAfterPromo}
                                {props.bookPriceAfterPromo !== props.bookPriceBeforePromo ?
                                    <span className={classes.promo}>
                                        <sub><del>${props.bookPriceBeforePromo}</del></sub>
                                    </span>
                                    :
                                    null
                                }
                            </h2>

                            <AddToCardButton fav={!wishList ? false : wishList.bookItems.filter((c) => c._id === props.book._id).length > 0 ? true : false} book={props.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookDetailsContainer;