import React, { useEffect ,useState} from 'react'
import classes from './UserReview.module.css'
import { AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Rate } from 'rsuite';
import { booksApi } from '../../store/services';
import storage from '../../Firebase/firebaseImage';
import { getDownloadURL, ref } from 'firebase/storage';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const textStyle = {
    verticalAlign: 'top',
    lineHeight: '42px',
    display: 'inline-block'
  };
 

  const texts = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent'
  };
const UserReview = props => {
    const [hoverValue, setHoverValue] = useState(0);
    const {reviews} = props
    // console.log(reviews)
    const theme = useSelector((state) => state.theme.currentTheme);
    const [getuserById] = booksApi.useGetUserByIDMutation()
    const [ user,setUser] = useState()
    const [ profileImg,setProfileImg] = useState()
    const [comment,setComment] = useState()
    const [addNewReview] = booksApi.useAddNewReviewMutation()
    let params = useParams()

    useEffect(()=>{
      getuserById().then((u)=>{
        //   console.log(u)
          setUser(u.data)
          const starsRef = ref(storage, `/uploads/users/${u.data.image}`);
            getDownloadURL(starsRef).then( (url)=>{
    
                
            setProfileImg(url)
            
            }).catch((error) => {console.log(error)});

      })
    },[])

    let addNewComment = (e,rate,c)=>{
        if(rate){
            addNewReview({bookId:params.id,comment:c,vote:rate}).then((r)=>{
                console.log(r)
                if(r.data){
                    toast.success("Comment Added Successfully")
                    setHoverValue(0)
                    setComment(' ')
                }
            }).catch((error) => {console.log(error) });

        }else{
            toast.warning('Please Vote To Submit Your comment')
        }
           e.preventDefault();

    }
    
    
    if(user){
        return (
            <div className={`col-12`}>
               <div className={`row ${theme === "night" ? classes.commentNight : classes.comment}`}>
                    <div className={`col-md-12 col-sm-12`}>
                        <div className={`row`} style={{padding:"10px"}}>
                            <div className={`col-12 ${classes.Info}`} style={{ padding: "10px" }}>
                                <div className={`${classes.commentData}`}>
                                    <h3>Leave a Comment</h3>
                                    <form  className={`row`}>
                                        <div className={`col-lg-1 col-md-2 col-sm-12`}>
                                            <div  className={classes.commenterAvatar}>
                                                 <img src={profileImg} />
                                            </div>
                                        </div>
                                        <div className={`col-lg-5 col-md-4 col-sm-12 ${classes.reviewUserInfo}`}>
                                            <h4>{user.fName + " " + user.lName }</h4>
                                            <h6 className={classes.commentDate} style={{color:"#ffb300"}}>
                                                <Rate defaultValue={hoverValue} value={hoverValue} onChangeActive={setHoverValue} size="sm"/>{' '}
                                                <span style={textStyle}>{texts[hoverValue]}</span>
                                            </h6>
                                        </div>
                                        <div className={`col-lg-12 col-md-12 col-sm-12 ${classes.commenterInfo}`}>
                                           <textarea value={comment} onChange={(e)=>setComment(e.target.value)}  />
                                        </div>
                                        <div className={`col-lg-12 col-md-12 col-sm-12 ${classes.commenterInfo}`}>
                                           <button type="submit" onClick={(e)=>addNewComment(e,hoverValue,comment)}>Send</button>
                                        </div>
                                    </form>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserReview;