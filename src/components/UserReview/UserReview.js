import React from 'react'
import classes from './UserReview.module.css'
import { useSelector } from 'react-redux'
import { Rate } from 'rsuite';

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

    const [hoverValue, setHoverValue] = React.useState(0);

    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className={`col-12`}>
            <div className={`row ${theme === "night" ? classes.commentNight : classes.comment}`}>
                <div className={`col-md-12 col-sm-12`}>
                    <div className={`row`} style={{ padding: "10px" }}>
                        <div className={`col-12 ${classes.Info}`} style={{ padding: "10px" }}>
                            <div className={`${classes.commentData}`}>
                                <h3>Leave a Comment</h3>
                                <div className={`row`}>
                                    <div className={`col-lg-1 col-md-2 col-sm-12`}>
                                        <div className={classes.commenterAvatar}>
                                            <img src={props.commenterImg} alt='commenter' />
                                        </div>
                                    </div>
                                    <div className={`col-lg-5 col-md-4 col-sm-12 ${classes.reviewUserInfo}`}>
                                        <h4>Reham Raafat</h4>
                                        <h6 className={classes.commentDate} style={{ color: "#ffb300" }}>
                                            <Rate defaultValue={hoverValue} onChangeActive={setHoverValue} size="sm" />{' '}
                                            <span style={textStyle}>{texts[hoverValue]}</span>
                                        </h6>
                                    </div>
                                    <div className={`col-lg-12 col-md-12 col-sm-12 ${classes.commenterInfo}`}>
                                        <textarea />
                                    </div>
                                    <div className={`col-lg-12 col-md-12 col-sm-12 ${classes.commenterInfo}`}>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserReview;