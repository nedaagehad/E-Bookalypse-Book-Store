import React from 'react'
import { useSelector } from 'react-redux'
import styles from './EditUserProfile.module.css'

function CatSidebar() {

    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className={`container`}>
            <div className="row">
                <div className={`col-lg-4`}>
                    <div className={`${styles.profileCard4} ${styles.zDepth3}`}>
                        <div className={`card ${theme === "night" ? styles.nightBG : ""}`}>
                            <div className={`${styles.cardBody} rounded-top ${styles.mov}`}>

                                <div className={styles.userBox}>
                                    <img src="./Images/avatar7.png" alt="user avatar" />
                                </div>
                                <h5 className={`mb-1 text-lg-center text-white ${styles.wrong} ${styles.h5} `}>Ahmad Mohamad</h5>
                                <h5 className={`text-light  text-lg-center ${styles.h5} ${styles.username}`}>@ahmadm12</h5>
                            </div>

                            <div className={styles.cardBody}>

                                <ul className={`list-group rounded-0 shadow-none`}>
                                    <li className={`list-group-item ${theme === "night" ? "list-group-item-dark" : ""} ${styles.content}`}>
                                        <div className={styles.listIcon}>
                                            <i className="fa fa-phone-square"></i>
                                        </div>

                                        <div className={styles.listDetails}>
                                            <span>0124XXXXXX</span>
                                            <small>Mobile Number</small>
                                        </div>
                                    </li>
                                    <li className={`list-group-item ${theme === "night" ? "list-group-item-dark" : ""} ${styles.content}`}>
                                        <div className={styles.listicon}>
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className={styles.listDetails}>
                                            <span>info@example.com</span>
                                            <small>Email Address</small>
                                        </div>
                                    </li>
                                    <li className={`list-group-item ${theme === "night" ? "list-group-item-dark" : ""} ${styles.content}`}>
                                        <div className={styles.listicon}>
                                            <i className="fa fa-globe"></i>
                                        </div>
                                        <div className={styles.listDetails}>
                                            <span>Egypt</span>
                                            <small>Country</small>
                                        </div>
                                    </li>
                                </ul>
                                <div className="row text-center mt-4 rounded-1">
                                    <div className="col p-2">
                                        <h4 className={`mb-1 line-height-5 ${theme === "night" ? styles.lightTxt : ""}`}>40</h4>
                                        <small className={`mb-0 font-weight-bold ${styles.mov2}`}>Books</small>
                                    </div>
                                    <div className="col p-2">
                                        <h4 className={`mb-1 line-height-5 ${theme === "night" ? styles.lightTxt : ""}`}>10</h4>
                                        <small className={`mb-0 font-weight-bold ${styles.mov2}`}>WishList</small>
                                    </div>
                                    <div className="col p-2">
                                        <h4 className={`mb-1 line-height-5 ${theme === "night" ? styles.lightTxt : ""}`}>5</h4>
                                        <small className={`mb-0 font-weight-bold ${styles.mov2}`}>Cart</small>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={`col-md-8 personal-info ps-lg-5`}>
                    {/* <div className='alert alert-info alert-dismissable'>
                        <a className='panel-close close' data-dismiss="alert">×</a>
                        <i className='fa fa-coffee' />
                        Your profile <strong>Updated </strong>successfully
                    </div> */}
                    <h3 className={styles.headertxt}>Edit Personal Information</h3>

                    <form className='form-horizontal' role="form">
                        <div className='form-group'>
                            <label className={`col-lg-3 ${theme === "night" ? styles.controlLabelNight : styles.controlLabel}`}>First Name:</label>
                            <div className='col-lg-9'>
                                <input className='form-control' type="text" value="Ahmad" />
                            </div>
                        </div>

                        <div className='form-group'>
                            <label className={`col-lg-3 ${theme === "night" ? styles.controlLabelNight : styles.controlLabel}`}>Last Name:</label>
                            <div className='col-lg-9'>
                                <input className='form-control' type="text" value="Ahmad" />
                            </div>
                        </div>
                        

                        <div class="form-group">
                            <label class={`col-lg-3 ${theme === "night" ? styles.controlLabelNight : styles.controlLabel}`}>Change Profile</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="file" />
                            </div>
                        </div>

                        <div className='form-group'>
                            <label className={`col-lg-3 ${theme === "night" ? styles.controlLabelNight : styles.controlLabel}`}>Old Password:</label>
                            <div className='col-lg-9'>
                                <input className='form-control' type="password" value="" />
                            </div>
                        </div>

                        <div className='form-group'>
                            <label className={`col-lg-3 ${theme === "night" ? styles.controlLabelNight : styles.controlLabel}`}>New Password:</label>
                            <div className='col-lg-9'>
                                <input className='form-control' type="password" value="" />
                            </div>
                        </div>

                        <div className='form-group'>
                            <label className={`col-lg-3 ${theme === "night" ? styles.controlLabelNight : styles.controlLabel}`}>Confirm Password:</label>
                            <div className='col-lg-9'>
                                <input className='form-control' type="password" value="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label className={`col-lg-3 ${theme === "night" ? styles.controlLabelNight : styles.controlLabel}`}></label>
                            <div className="col-lg-9">
                                <input type="button" className={`btn ${styles.saveBtn}`} value="Save Changes" />
                                <input type="button" className={`btn ${styles.cancelBtn}`} value="Cancel" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default CatSidebar