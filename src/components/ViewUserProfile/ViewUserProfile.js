import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { booksApi } from '../../store/services'
import styles from './ViewUserProfile.module.css'
function CatSidebar() {
    // const {data,isLoading,error} = booksApi.useGetUserByIDQuery()
    const [getUserByID,response] = booksApi.useGetUserByIDMutation();
    const [user,setUser] = useState()
    useEffect(() => {
        getUserByID().then((res)=>
            {            
                setUser(res.data)
                console.log(res.data)
            }        
        ).catch((err) => console.log(err))

    }, []);
    if(user){
        return (
            
            <div className={`container my-5`}>
                <div className="row">
                    <div className={`col-lg-4`}>
                        <div className={`${styles.profileCard4} ${styles.zDepth3}`}>
                            <div className="card">
                                <div className={`${styles.cardBody} rounded-top ${styles.mov}`}>
    
                                    <div className={styles.userBox}>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar" />
                                    </div>
                                    <h5 className={`mb-1 text-lg-center text-white ${styles.wrong} ${styles.h5} `}>{user.fName+" "+user.lName} </h5>
                                    <h5 className={`text-light  text-lg-center ${styles.h5} ${styles.username}`}>@{user.userName}</h5>
                                </div>
    
                                <div className={styles.cardBody}>
    
                                    <ul className={`list-group shadow-none`}>
                                        <li className={`list-group-item ${styles.content}`}>
                                            <div className={styles.listIcon}>
                                                <i className="fa fa-phone-square"></i>
                                            </div>
    
                                            <div className={styles.listDetails}>
                                                <span>{user.phone}</span>
                                                <small>Mobile Number</small>
                                            </div>
                                        </li>
                                        <li className={`list-group-item ${styles.content}`}>
                                            <div className={styles.listicon}>
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                            <div className={styles.listDetails}>
                                                <span>{user.email}</span>
                                                <small>Email Address</small>
                                            </div>
                                        </li>
                                        <li className={`list-group-item ${styles.content}`}>
                                            <div className={styles.listicon}>
                                                <i className="fa fa-globe"></i>
                                            </div>
                                            <div className={styles.listDetails}>
                                                <span>{user.city}</span>
                                                <small>city</small>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="row text-center mt-4">
                                        <div className="col p-2">
                                            <h4 className="mb-1 line-height-5">40</h4>
                                            <small className={`mb-0 font-weight-bold ${styles.mov2}`}>Books</small>
                                        </div>
                                        <div className="col p-2">
                                            <h4 className="mb-1 line-height-5">10</h4>
                                            <small className={`mb-0 font-weight-bold ${styles.mov2}`}>WishList</small>
                                        </div>
                                        <div className="col p-2">
                                            <h4 className="mb-1 line-height-5">5</h4>
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
                        <h3 className={styles.headertxt}>Personal Information</h3>
    
                        <form className='form-horizontal' role="form">
                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel}`}>First Name:</label>
                                <div className='col-lg-9'>
                                    {/* <input className='form-control' type="text" value="Ahmad" /> */}
                                    <h4 className={styles.graycol}>{user.fName}</h4>
                                </div>
                            </div>
    
                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel}`}>Last Name:</label>
                                <div className='col-lg-9'>
                                    {/* <input className='form-control' type="text" value="Ahmad" /> */}
                                    <h4 className={styles.graycol}>{user.lName}</h4>
                                </div>
                            </div>
                            
    
                            <div class="form-group">
                                <label class={`col-lg-3 ${styles.controlLabel}`}>Username:</label>
                                <div class="col-lg-9">
                                    <h4 className={styles.graycol}>@{user.userName}</h4>
                                </div>
                            </div>
    
                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel}`}>Email Address:</label>
                                <div className='col-lg-9'>
                                    {/* <input className='form-control' type="password" value="" /> */}
                                    <h4 className={styles.graycol}>{user.email}</h4>
                                </div>
                            </div>
    
                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel}`}>Phone Number:</label>
                                <div className='col-lg-9'>
                                    {/* <input className='form-control' type="password" value="" /> */}
                                    <h4 className={styles.graycol}>{user.phone}</h4>
                                </div>
                            </div>
    
                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel}`}>City:</label>
                                <div className='col-lg-9'>
                                    {/* <input className='form-control' type="password" value="" /> */}
                                    <h4 className={styles.graycol}>{user.city}</h4>
                                </div>
                            </div>
                            <div class="form-group">
                                <label className={`col-lg-3 ${styles.controlLabel}`}></label>
                                <div className="col-lg-9">
                                    <Link   to={`/editProfile`} >
                                        <input type="button" className={`btn ${styles.saveBtn}`} value="Edit Profile" />

                                    </Link>
                                    {/* <input type="button" className={`btn ${styles.cancelBtn}`} value="Cancel" /> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    
        )

    }
}

export default CatSidebar