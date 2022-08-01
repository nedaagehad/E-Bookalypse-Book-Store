import React from 'react'
import classes from './BookDetailsContainer.module.css'
import { BsFillHeartFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

const BookDetailsContainer = props => {
    return (
        <div className={`col-12`}>
            <div className={classes.BookDetails}>
                <h2>Book Details</h2>
                <div className={`row`}>
                    <div className={`col-md-3 col-sm-12`}>
                        <div className={classes.Book_Poster}>
                            <img className="img-thumbnail" src="../../Images/Books/1.jpg" alt=""/>
                        </div>
                    </div>
                    <div className={`col-md-9 col-sm-12`}>
                        <div className={classes.Details}>
                            <div className={classes.Reviews}>
                                <button className={classes.stars}>
                                    <span><AiFillStar /></span>
                                    <span><AiFillStar /></span>
                                    <span><AiFillStar /></span>
                                    <span><AiFillStar /></span>
                                    <span><AiFillStar /></span>
                                    &nbsp;&nbsp;4.2
                                </button>
                                <button className={classes.Review}>56 Reviews</button>
                            </div>
                            <h1>Harry Potter and the Sorcerer’s Stone </h1>
                            <h3>J. K. Rowling</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                 pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <h2>$15,50<span className={classes.promo}><sub><del>$ 19.98</del></sub></span></h2>
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