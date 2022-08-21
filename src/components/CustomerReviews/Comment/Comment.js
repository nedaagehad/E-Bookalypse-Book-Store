import React, { useEffect, useState } from 'react'
import classes from './Comment.module.css'
import { AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { booksApi } from '../../../store/services'
import {toast} from 'react-toastify';
import { getDownloadURL, ref } from 'firebase/storage'
import storage from '../../../Firebase/firebaseImage'
const Comment = props => {
    const [removeReview] = booksApi.useDeleteReviewMutation()
    const theme = useSelector((state) => state.theme.currentTheme);
    const authState = useSelector(state => state.auth.userRole)
    const [profileImage,setProfileImage]= useState()
    const deleteComment = (e,reviewId)=>{
        e.preventDefault();
        removeReview(reviewId).then((r)=>{
            if(r.data){
                toast.success("Review Deleted Successfully")
            }else{
                console.log(r)
            }
        })
    }
    useEffect(()=>{
        const starsRef = ref(storage, `/uploads/users/${props.userImage}`);
        getDownloadURL(starsRef).then( (url)=>{

          
          setProfileImage(url)
      
        }).catch((error) => {console.log(error)});
    //   console.log(props.userImage)
    },[])
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

                                    <img src={profileImage} /> 

                                </div>
                                <div className={classes.commenterInfo}>
                                    <h5 className={theme === "night" ? classes.commenterNameNight : classes.commenterName}>{props.userCommenterName}</h5>
                                    <h6 className={classes.commentDate}>{props.commentDate}</h6>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 ${classes.comment_desc}`}>
                            <p>{props.commentDesc}</p>
                        </div>
                        <div className={`col-4 ${classes.comment_desc}`}>
                            {props.loggedInUser === props.userCommenterID  || authState === 'rootAdmin' ? 
                            
                            <button onClick={(e)=>deleteComment(e,props.reviewID)} className='btn-danger'> Delete </button>
                            :
                            null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment