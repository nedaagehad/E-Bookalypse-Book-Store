import React from 'react';
import { useSelector } from 'react-redux';

// CSS Module
import styles from './UserCard.module.css';

function UserCard() {

    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className={`${styles.profileCard4} ${styles.zDepth3}`}>
            <div className={`card ${theme === "night" ? "bg-dark" : ""}`}>
                <div className={`${styles.cardBody} rounded-top ${styles.mov}`}>

                    <div className={styles.userBox}>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar" />
                    </div>
                    <h5 className={`mb-1 text-lg-center text-white ${styles.wrong} ${styles.h5} `}>test</h5>
                    <h5 className={`text-light  text-lg-center ${styles.h5} ${styles.username}`}>@test</h5>
                </div>

                <div className={styles.cardBody}>
                    <ul className={`list-group shadow-none rounded-0`}>
                        <li className={`list-group-item ${theme === "night" ? "list-group-item-dark" : ""} ${styles.content}`}>
                            <div className={styles.listIcon}>
                                <i className="fa fa-phone-square"></i>
                            </div>
                            <div className={styles.listDetails}>
                                <span>012345678</span>
                                <small>Mobile Number</small>
                            </div>
                        </li>

                        <li className={`list-group-item ${theme === "night" ? "list-group-item-dark" : ""} ${styles.content}`}>
                            <div className={styles.listicon}>
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className={styles.listDetails}>
                                <span>test@test.test</span>
                                <small>Email Address</small>
                            </div>
                        </li>

                        <li className={`list-group-item ${theme === "night" ? "list-group-item-dark" : ""} ${styles.content}`}>
                            <div className={styles.listicon}>
                                <i className="fa fa-globe"></i>
                            </div>
                            <div className={styles.listDetails}>
                                <span>test</span>
                                <small>City</small>
                            </div>
                        </li>
                    </ul>

                    <div className="row text-center mt-4 rounded-0">
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
    )
}

export default UserCard