import React from 'react'
import classes from './Combination.module.css'
import { BsFillHeartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Combination = props => {

    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className={`col-md-6 col-sm-12 ${classes.collection}`}>
            <div className={`row`}>
                <div className={`col-md-12`}>
                    <div className={classes.booksPosters}>
                        <div className={classes.first}>
                            <img src={props.collectionData.book1.bookPoster} alt={props.collectionData.book1.bookName}/>
                        </div>
                        <div className={classes.second}>
                        <div className={classes.ribbon}>
                            <p>${props.collectionPrice}</p>
                        </div>
                            <img src={props.collectionData.book2.bookPoster} alt={props.collectionData.book2.bookName}/>
                        </div>
                        <div className={classes.third}>
                            <img src={props.collectionData.book3.bookPoster} alt={props.collectionData.book3.bookName}/>
                        </div>
                    </div>
                </div>
                <div className={`col-md-12`}>
                    <h4>{props.collectionName}</h4>
                    <h6 className={theme === "night" ? classes.detailsDark : ""}>{props.collectionData.book1.bookName}</h6>
                    <h6 className={theme === "night" ? classes.detailsDark : ""}>{props.collectionData.book2.bookName}</h6>
                    <h6 className={theme === "night" ? classes.detailsDark : ""}>{props.collectionData.book3.bookName}</h6>
                    <div className={classes.action}>
                        <button>Add To Card <i className={" col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
                        {/* <button className={classes.favorite}><BsFillHeartFill/></button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Combination;