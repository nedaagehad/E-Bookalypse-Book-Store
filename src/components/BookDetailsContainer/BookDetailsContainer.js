import React, { useEffect,useState } from 'react'
import classes from './BookDetailsContainer.module.css'
import AddToCardButton from '../AddToCardButton/AddToCardButton'
import { AiFillStar } from 'react-icons/ai'
import { booksApi } from '../../store/services'
import { addToCartReducer, removeAll } from '../../store/reducers/cartReducer/CartReducer'
import { useDispatch, useSelector } from 'react-redux'

const BookDetailsContainer = props => {
    const [addToCart,response] =booksApi.useAddToCartMutation()
    const cartItems = useSelector(state=>state.cart)
    const cartItemsBookIds = useSelector(state=>state.cart.bookIds)
    const theme = useSelector((state) => state.theme.currentTheme);
    const getWishList = booksApi.useGetWishListQuery()
    const [wishList,setWishList] = useState()
    let dispatch= useDispatch()
    

    // useEffect(()=>{
    //     // console.log(cartItemsBookIds.length )
    //     if(cartItemsBookIds.length > 0){
    //         addToCart(cartItems).then((re)=>
    //         {
    //             console.log(re)
    //             dispatch(removeAll())
    //         }
            
    //         )
            
    //     }


    // },[cartItemsBookIds])

    useEffect(()=>{
        if(getWishList.data){
            // console.log(getWishList.data.wishList.bookItems.filter((b)=> b._id == b.id))
            
            setWishList(getWishList.data.wishList)
          }
    },[getWishList.data])

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
                <h2 className={classes.title}>Book Details</h2>
                <div className={`row`}>
                    <div className={`col-md-3 col-sm-12`}>
                        <div className={classes.Book_Poster}>
                            <img className="img-thumbnail" src={props.img} alt={props.alt}/>
                        </div>
                    </div>
                    <div className={`col-md-9 col-sm-12`}>
                        <div className={classes.Details}>
                            {/* <div className={classes.Reviews}>
                                <button className={classes.stars}>
                                    {((x) => {
                                            let starsArr = [];
                                            for (var i = 1; i <= 5; i++)
                                            {
                                                if (i <= x)
                                                {
                                                    starsArr.push(<span style={{ color: "#FBAC04" }}><AiFillStar /></span>);
                                                }
                                                else
                                                {
                                                    starsArr.push(<span style={{ color: "#D0CBCB" }}><AiFillStar /></span>);
                                                }
                                            }
                                            return (starsArr);
                                        })(Math.floor(props.rate))}
                                    &nbsp;&nbsp;{props.rate}
                                </button>
                                <button className={classes.Review}>{props.reviewCount} Reviews</button>
                            </div> */}
  
                        
                            <h1 className={theme === "night" ? "text-light" : ""}>{props.bookName}</h1>
                            <h3>{props.bookAuther}</h3>
{/* <<<<<<< HEAD */}
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
{/* ======= */}
                            {/* <p>{props.bookDesc}</p>
                            <h2>${props.bookPriceAfterPromo}<span className={classes.promo}><sub><del>${props.bookPriceBeforePromo}</del></sub></span></h2> */}
                            <AddToCardButton fav={!wishList  ? false : wishList.bookItems.filter((c)=> c._id === props.book._id).length > 0 ?  true : false} book={props.id}/>
{/* >>>>>>> 064fd04123a5f582be55b3c12a9a48eb0b37d657 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookDetailsContainer;