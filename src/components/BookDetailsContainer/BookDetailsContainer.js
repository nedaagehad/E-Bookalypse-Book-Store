import React, { useEffect,useState } from 'react'
import classes from './BookDetailsContainer.module.css'
import AddToCardButton from '../AddToCardButton/AddToCardButton'
import { AiFillStar } from 'react-icons/ai'
import { booksApi } from '../../store/services'
import { addToCartReducer, removeAll } from '../../store/reducers/cartReducer/CartReducer'
import { useDispatch, useSelector } from 'react-redux'
import loadPoster from './bookPoster.gif' 
const BookDetailsContainer = props => {
    const [addToCart,response] =booksApi.useAddToCartMutation()
    const cartItems = useSelector(state=>state.cart)
    const cartItemsBookIds = useSelector(state=>state.cart.bookIds)
    const theme = useSelector((state) => state.theme.currentTheme);
    const getWishList = booksApi.useGetWishListQuery()
    const [wishList,setWishList] = useState()
    const getBookShelf = booksApi.useGetUserBooksQuery()
    const [bookShelf,setBookShelf] = useState()
  
    let dispatch= useDispatch()

    
    useEffect(() => {
        
        if(getWishList.data){
            // console.log(getWishList.data.wishList.bookItems.filter((b)=> b._id == b.id))
            
            setWishList(getWishList.data.wishList)
          }
          if(getBookShelf.data){
            setBookShelf(getBookShelf.data)
          }
    },[getWishList.data,getBookShelf.data])

    let addToCartFun =  (bookData) => {
        
            // console.log(cartItems)
            addToCart({bookIds:bookData}).then((re)=>
            
                {
                    if(re.data){
                        dispatch(addToCartReducer(bookData))
                        console.log("right")
                    }else{
                        console.log("error")
                    }
                console.log(re)
            }
            )
          

    }

    const addToDB = ()=>{
        console.log(cartItems)
         // addToCart(cartItems).then((re)=>console.log(re))
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
                                    <img className="img-thumbnail" src={loadPoster} />
                                    :
                                    <img className="img-thumbnail" src={props.img } alt={props.alt} />
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
                            {/* {console.log(props.book._id)} */}
                            {/* <div className={classes.action}>
                                <button onClick={()=>addToCartFun(props.id)}>Add To Cart <i className={" col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
                                <button className={classes.favorite}><BsFillHeartFill/></button>
                            </div> */}
                            {/* <p>{props.bookDesc}</p>
                            <h2>${props.bookPriceAfterPromo}<span className={classes.promo}><sub><del>${props.bookPriceBeforePromo}</del></sub></span></h2> */}
                            <AddToCardButton bookShelf={!bookShelf ? false : bookShelf.filter((bs)=>bs._id === props.book._id ).length > 0 ? true : false } fav={!wishList  ? false : wishList.bookItems.filter((c)=> c._id === props.book._id).length > 0 ?  true : false} book={props.id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookDetailsContainer;