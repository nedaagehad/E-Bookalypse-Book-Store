import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { booksApi } from '../../store/services';
//loader 
import Preloader from '../../components/Preloader/Preloader';

// CSS Module
import styles from './ViewUserProfile.module.css';

// Components
import UserCard from '../UserCard/UserCard';

function ViewUserProfile() {

    const theme = useSelector((state) => state.theme.currentTheme);
    const [loading, setLoading] = useState(false);
    const [getUserByID] = booksApi.useGetUserByIDMutation();
    const [user, setUser] = useState()

    useEffect(() => {
        if (loading) {
            setLoading(true);
          }
        else
        {
            getUserByID().then((res) => {
                setUser(res.data)
                setLoading(false);
            }
            ).catch((err) => console.log(err))
        }
    }, []);

    if (user) {
        return (
            
            <div className={`container py-5`}>
             {loading ?
                 <Preloader />
                :
                <div className="row pt-3">
                    <div className={`col-lg-4`}>
                        <UserCard user={user} />
                    </div>

                    <div className={`col-md-8 personal-info ps-lg-5`}>
                        <h3 className={styles.headertxt}>Personal Information</h3>

                        <form className='form-horizontal'>
                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel} ${theme === "night" ? styles.lightTxt : ""}`}>First Name:</label>
                                <div className='col-lg-9'>
                                    <h4 className={`${styles.graycol} ${theme === "night" ? "text-light" : ""}`}>{user.fName}</h4>
                                </div>
                            </div>

                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel} ${theme === "night" ? styles.lightTxt : ""}`}>Last Name:</label>
                                <div className='col-lg-9'>
                                    <h4 className={`${styles.graycol} ${theme === "night" ? "text-light" : ""}`}>{user.lName}</h4>
                                </div>
                            </div>


                            <div class="form-group">
                                <label class={`col-lg-3 ${styles.controlLabel} ${theme === "night" ? styles.lightTxt : ""}`}>Username:</label>
                                <div class="col-lg-9">
                                    <h4 className={`${styles.graycol} ${theme === "night" ? "text-light" : ""}`}>@{user.userName}</h4>
                                </div>
                            </div>

                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel} ${theme === "night" ? styles.lightTxt : ""}`}>Email Address:</label>
                                <div className='col-lg-9'>
                                    <h4 className={`${styles.graycol} ${theme === "night" ? "text-light" : ""}`}>{user.email}</h4>
                                </div>
                            </div>

                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel} ${theme === "night" ? styles.lightTxt : ""}`}>Phone Number:</label>
                                <div className='col-lg-9'>
                                    <h4 className={`${styles.graycol} ${theme === "night" ? "text-light" : ""}`}>{user.phone}</h4>
                                </div>
                            </div>

                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel} ${theme === "night" ? styles.lightTxt : ""}`}>City:</label>
                                <div className='col-lg-9'>
                                    <h4 className={`${styles.graycol} ${theme === "night" ? "text-light" : ""}`}>{user.city}</h4>
                                </div>
                            </div>
                            <div class="form-group">
                                <label className={`col-lg-3 ${styles.controlLabel}`}></label>
                                <div className="col-lg-9">
                                    <Link to={`/editProfile`} >
                                        <input type="button" className={`btn ${styles.saveBtn}`} value="Edit Profile" />
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>}
            </div>

        )

    }
}

export default ViewUserProfile;