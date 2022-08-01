import React from 'react'
import classes from './CustomerReviews.module.css'
import Comment from './Comment/Comment'
import { AiFillStar } from 'react-icons/ai'
const CustomerReviews = props => {
    return (
        <div className={`col-12`}>
            <div className={classes.CustomerReview}>
                <h2>Customer Reviews</h2>
                <div className={`row`}>
                    <div className={`col-12 ${classes.ReviewBrief}`}>
                        <div className={`row`}>
                            <div className={`col-md-3 col-sm-12 ${classes.FullRate}`}>
                                <h3><span className={classes.RateResult}>4.2 </span>out of 5</h3>
                                <div className={classes.stars}>
                                    <span><AiFillStar/></span>
                                    <span><AiFillStar /></span>
                                    <span><AiFillStar /></span>
                                    <span><AiFillStar /></span>
                                    <span><AiFillStar/></span>
                                </div>
                            </div>
                            <div className={`col-md-5 col-sm-12 ${classes.RateDesc}`}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className={`col-md-4 col-sm-12 ${classes.RateDetails}`}>
                                <div className={classes.RateDetInfo} style={{ width: "100%",display:"flex" }}>
                                    <span style={{ display: "inline-block" }} className="sr-only"><AiFillStar/></span>
                                    <span style={{display:"inline-block"}} className="sr-only">5</span>
                                    <div className="progress" style={{width:"80%",height:"10px"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"70%",backgroundColor:"#8D27AE"}}>  
                                        </div>
                                    </div>
                                    <span style={{display:"inline-block"}} className="sr-only">70%</span>
                                </div>
                                <div className={classes.RateDetInfo} style={{ width: "100%",display:"flex" }}>
                                    <span style={{ display: "inline-block" }} className="sr-only"><AiFillStar/></span>
                                    <span style={{display:"inline-block"}} className="sr-only">5</span>
                                    <div className="progress" style={{width:"80%",height:"10px"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"70%",backgroundColor:"#8D27AE"}}>  
                                        </div>
                                    </div>
                                    <span style={{display:"inline-block"}} className="sr-only">70%</span>
                                </div>
                                <div className={classes.RateDetInfo} style={{ width: "100%",display:"flex" }}>
                                    <span style={{ display: "inline-block" }} className="sr-only"><AiFillStar/></span>
                                    <span style={{display:"inline-block"}} className="sr-only">5</span>
                                    <div className="progress" style={{width:"80%",height:"10px"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"70%",backgroundColor:"#8D27AE"}}>  
                                        </div>
                                    </div>
                                    <span style={{display:"inline-block"}} className="sr-only">70%</span>
                                </div>
                                <div className={classes.RateDetInfo} style={{ width: "100%",display:"flex" }}>
                                    <span style={{ display: "inline-block" }} className="sr-only"><AiFillStar/></span>
                                    <span style={{display:"inline-block"}} className="sr-only">5</span>
                                    <div className="progress" style={{width:"80%",height:"10px"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"70%",backgroundColor:"#8D27AE"}}>  
                                        </div>
                                    </div>
                                    <span style={{display:"inline-block"}} className="sr-only">70%</span>
                                </div>
                                <div className={classes.RateDetInfo} style={{ width: "100%",display:"flex" }}>
                                    <span style={{ display: "inline-block" }} className="sr-only"><AiFillStar/></span>
                                    <span style={{display:"inline-block"}} className="sr-only">5</span>
                                    <div className="progress" style={{width:"80%",height:"10px"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"70%",backgroundColor:"#8D27AE"}}>  
                                        </div>
                                    </div>
                                    <span style={{display:"inline-block"}} className="sr-only">70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12`}>
                        <div className={`row`}>
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerReviews;