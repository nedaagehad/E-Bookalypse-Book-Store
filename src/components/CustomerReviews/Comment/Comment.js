import React from 'react'
import classes from './Comment.module.css'
import { AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Comment = props => {

    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className={`col-12`}>
            <div className={`row ${theme === "night" ? classes.commentNight : classes.comment}`}>
                <div className={`col-md-3 col-sm-12 ${classes.FullRate}`}>
                     <h3>{props.commentRate}</h3>
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
                            })(Math.floor(props.commentRate))}
                     </div>
                </div>
                <div className={`col-md-9 col-sm-12`}>
                    <div className={`row`} style={{padding:"10px"}}>
                        <div className={`col-12 ${classes.Info}`} style={{ padding: "10px" }}>
                            <div className={`${classes.commentData}`}>
                                <div className={classes.commenterAvatar}>
                                    {props.commenterImg !== "" ? <img src={props.commenterImg} /> : ""}
                                </div>
                                <div className={classes.commenterInfo}>
                                    <h5 className={theme === "night" ? classes.commenterNameNight : classes.commenterName}>{props.commenterName}</h5>
                                    <h6 className={classes.commentDate}>{props.commentDate}</h6>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 ${classes.comment_desc}`}>
                            <p>{props.commentDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment