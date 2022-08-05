import React from 'react'
import classes from './CustomerReviews.module.css'
import { AiFillStar } from 'react-icons/ai'
import Comment from './Comment/Comment'
const CustomerReviews = props => {
    return (
        <div className={`col-12`}>
            <div className={classes.CustomerReview}>
                <h2>Customer Reviews</h2>
                <div className={`row`}>
                    <div className={`col-12 ${classes.ReviewBrief}`}>
                        <div className={`row`}>
                            <div className={`col-md-3 col-sm-12 ${classes.FullRate}`}>
                                <h3><span className={classes.RateResult}>{props.rate}</span>out of 5</h3>
                                <div className={classes.stars}>
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
                                </div>
                            </div>
                            <div className={`col-md-5 col-sm-12 ${classes.RateDesc}`}>
                                <p>{props.rateDesc}</p>
                            </div>
                            <div className={`col-md-4 col-sm-12 ${classes.RateDetails}`}>
                                <div className={classes.RateDetInfo} style={{ width: "100%",display:"flex" }}>
                                    <span style={{ display: "inline-block" }} className="sr-only"><AiFillStar/></span>
                                    <span style={{display:"inline-block"}} className="sr-only">5</span>
                                    <div className="progress" style={{width:"80%",height:"10px"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow={props.fivePerc}
                                        aria-valuemin="0" aria-valuemax="100" style={{width:props.fivePerc+"%",backgroundColor:"#8D27AE"}}>  
                                        </div>
                                    </div>
                                    <span style={{display:"inline-block"}} className="sr-only">{props.fivePerc}%</span>
                                </div>
                                <div className={classes.RateDetInfo} style={{ width: "100%",display:"flex" }}>
                                    <span style={{ display: "inline-block" }} className="sr-only"><AiFillStar/></span>
                                    <span style={{display:"inline-block"}} className="sr-only">4</span>
                                    <div className="progress" style={{width:"80%",height:"10px"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow={props.fourPerc}
                                        aria-valuemin="0" aria-valuemax="100" style={{width:props.fourPerc+"%",backgroundColor:"#8D27AE"}}>  
                                        </div>
                                    </div>
                                    <span style={{display:"inline-block"}} className="sr-only">{props.fourPerc}%</span>
                                </div>
                                <div className={classes.RateDetInfo} style={{ width: "100%",display:"flex" }}>
                                    <span style={{ display: "inline-block" }} className="sr-only"><AiFillStar/></span>
                                    <span style={{display:"inline-block"}} className="sr-only">3</span>
                                    <div className="progress" style={{width:"80%",height:"10px"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow={props.threePerc}
                                        aria-valuemin="0" aria-valuemax="100" style={{width:props.threePerc+"%",backgroundColor:"#8D27AE"}}>  
                                        </div>
                                    </div>
                                    <span style={{display:"inline-block"}} className="sr-only">{props.threePerc}%</span>
                                </div>
                                <div className={classes.RateDetInfo} style={{ width: "100%",display:"flex" }}>
                                    <span style={{ display: "inline-block" }} className="sr-only"><AiFillStar/></span>
                                    <span style={{display:"inline-block"}} className="sr-only">2</span>
                                    <div className="progress" style={{width:"80%",height:"10px"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow={props.twoPerc}
                                        aria-valuemin="0" aria-valuemax="100" style={{width:props.twoPerc+"%",backgroundColor:"#8D27AE"}}>  
                                        </div>
                                    </div>
                                    <span style={{display:"inline-block"}} className="sr-only">{props.twoPerc}%</span>
                                </div>
                                <div className={classes.RateDetInfo} style={{ width: "100%",display:"flex" }}>
                                    <span style={{ display: "inline-block" }} className="sr-only"><AiFillStar/></span>
                                    <span style={{display:"inline-block"}} className="sr-only">1</span>
                                    <div className="progress" style={{width:"80%",height:"10px"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow={props.onePerc}
                                        aria-valuemin="0" aria-valuemax="100" style={{width:props.onePerc+"%",backgroundColor:"#8D27AE"}}>  
                                        </div>
                                    </div>
                                    <span style={{display:"inline-block"}} className="sr-only">{props.onePerc}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12`}>
                        <div className={`row`}>
                            {
                                props.comments.map((item) => {
                                    return(<Comment
                                        commentRate={item.rate}
                                        commenterImg={item.commenterImg}
                                        commenterName={item.commenterName}
                                        commentDate={item.commentDate}
                                        commentDesc={item.commentDesc}
                                    />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerReviews;