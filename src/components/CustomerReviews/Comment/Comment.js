import React from 'react'
import classes from './Comment.module.css'
import { AiFillStar } from 'react-icons/ai'
const Comment = props => {
    return (
        <div className={`col-12`}>
            <div className={`row ${classes.comment}`}>
                <div className={`col-md-3 col-sm-12 ${classes.FullRate}`}>
                     <h3>4.2</h3>
                     <div className={classes.stars}>
                          <span><AiFillStar/></span>
                          <span><AiFillStar /></span>
                          <span><AiFillStar /></span>
                          <span><AiFillStar /></span>
                          <span><AiFillStar/></span>
                     </div>
                </div>
                <div className={`col-md-9 col-sm-12`}>
                    <div className={`row`} style={{padding:"10px"}}>
                        <div className={`col-12 ${classes.Info}`} style={{ padding: "10px" }}>
                            <div className={`${classes.commentData}`}>
                                <div className={classes.commenterAvatar}>
                                    <img />
                                </div>
                                <div className={classes.commenterInfo}>
                                    <h5 className={classes.commenterName}>Mona Ahmed</h5>
                                    <h6 className={classes.commentDate}>22 Jun, 2022</h6>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 ${classes.comment_desc}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment