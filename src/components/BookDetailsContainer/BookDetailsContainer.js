import React from 'react'
import classes from './BookDetailsContainer.module.css'
import AddToCardButton from '../AddToCardButton/AddToCardButton'
import { AiFillStar } from 'react-icons/ai'

const BookDetailsContainer = props => {
    return (
        <div className={`col-12`}>
            <div className={classes.BookDetails}>
                <h2>Book Details</h2>
                <div className={`row`}>
                    <div className={`col-md-3 col-sm-12`}>
                        <div className={classes.Book_Poster}>
                            <img className="img-thumbnail" src={props.img} alt={props.alt}/>
                        </div>
                    </div>
                    <div className={`col-md-9 col-sm-12`}>
                        <div className={classes.Details}>
                            <div className={classes.Reviews}>
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
                            </div>
                            <h1>{props.bookName}</h1>
                            <h3>{props.bookAuther}</h3>
                            <p>{props.bookDesc}</p>
                            <h2>${props.bookPriceAfterPromo}<span className={classes.promo}><sub><del>${props.bookPriceBeforePromo}</del></sub></span></h2>
                            <AddToCardButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookDetailsContainer;