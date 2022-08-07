import React from 'react'
import classes from './BookDetailsContainer.module.css'
import { BsFillHeartFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const BookDetailsContainer = props => {

    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className={`col-12`}>
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
                            <h1 className={theme === "night" ? "text-light" : ""}>{props.bookName}</h1>
                            <h3>{props.bookAuther}</h3>
                            <p className={theme === "night" ? classes.description : ""}>{props.bookDesc}</p>
                            <h2>${props.bookPriceAfterPromo}<span className={classes.promo}><sub><del>${props.bookPriceBeforePromo}</del></sub></span></h2>
                            <div className={classes.action}>
                                <button>Add To Card <i className={" col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
                                <button className={classes.favorite}><BsFillHeartFill/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookDetailsContainer;