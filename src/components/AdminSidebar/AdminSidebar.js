import React, { useState } from 'react'
import '../../assetsAdmin/css/style.css'
import "../../assetsAdmin/vendors/mdi/css/materialdesignicons.min.css"
import "../../assetsAdmin/vendors/flag-icon-css/css/flag-icon.min.css"
import "../../assetsAdmin/AdminDashboard.css";
// import style from "../../assetsAdmin/AdminDashboard.module.css";
import face15 from "../../assetsAdmin/images/faces/face15.jpg";
import { Link } from 'react-router-dom';


function AdminSidebar(props) { 
    const {user,userImg} = props
    if(user){ 
        return (
            // <div>
                <div className="sidebar sidebar-offcanvas" id="sidebar" >

                    <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                        <Link className="sidebar-brand brand-logo" to=""></Link>
                        {/* <Link className="sidebar-brand brand-logo-mini" to=""><img src="./assets/images/logo-mini.svg" alt="logo" /></Link> */}
                    </div>

                    <ul className="nav ">
                        <li className="nav-item profile">
                            <div className="profile-desc pt-5">
                                <div className="profile-pic">
                                    <div className="count-indicator">
                                        <img className="img-xs rounded-circle " src={userImg} alt="" />
                                        <span className="count bg-success"></span>
                                    </div>
                                    <div className="profile-name">
                                        <h5 className="mb-0 font-weight-bold text-white">{user.fName + " " + user.lName}</h5>
                                        <span >Admin</span>
                                    </div>
                                </div>
                                {/* <Link to="#" id="profile-dropdown" data-toggle="dropdown"> <i className="mdi mdi-dots-vertical"></i></Link> */}

                            </div>
                        </li>
                        <li className="nav-item nav-category">
                            <span className="nav-link">Navigation</span>
                        </li>
                        <li className="nav-item menu-items">
                            <Link className="nav-link"to="/admin">
                                <span className="menu-icon">
                                    <i className="mdi mdi-speedometer"></i>
                                </span>
                                <span className="menu-title fs-5 text-muted" id="navigatehover">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item menu-items">
                            <Link className="nav-link" to="/admin/books">
                                <span className="menu-icon">
                                    <i className="mdi mdi-book"></i>
                                </span>
                                <span className="menu-title fs-5 text-muted" id="navigatehover">Books</span>
                            </Link>
                        </li>
                        {/* <li className="nav-item menu-items">
            <Link className="nav-link" to="">
                <span className="menu-icon">
                <i className="mdi mdi-playlist-play"></i>
                </span>
                <span className="menu-title">Form Elements</span>
            </Link>
            </li> */}
                        <li className="nav-item menu-items">
                            <Link className="nav-link" to="/admin/categories">
                                <span className="menu-icon">
                                    <i className="mdi mdi-table-large"></i>
                                </span>
                                <span className="menu-title fs-5 text-muted" id="navigatehover">Categories</span>
                            </Link>
                        </li>
                        {/* <li className="nav-item menu-items">
                            <Link className="nav-link" to="">
                                <span className="menu-icon">
                                    <i className="mdi mdi-chart-bar"></i>
                                </span>
                                <span className="menu-title fs-5">Charts</span>
                            </Link>
                        </li> */}
                        <li className="nav-item menu-items">
                            <Link className="nav-link" to="/admin/users">
                                <span className="menu-icon">
                                    <i className="mdi mdi-contacts"></i>
                                </span>
                                <span className="menu-title fs-5 text-muted" id="navigatehover">Users</span>
                            </Link>
                        </li>
                        <li className="nav-item menu-items">
                            <Link className="nav-link" to="/admin/collections">
                                <span className="menu-icon">
                                    <i className="mdi mdi-playlist-play"></i>
                                </span>
                                <span className="menu-title fs-5 text-muted" id="navigatehover">Collections</span>
                            </Link>
                        </li>

                        <li className="nav-item menu-items">
                            <Link className="nav-link" to="/admin/promotions">
                                <span className="menu-icon">
                                    <i className="mdi mdi-history"></i>
                                </span>
                                <span className="menu-title fs-5 text-muted" id="navigatehover">Promotions</span>
                            </Link>
                        </li>

                        <li className="nav-item menu-items">
                            <Link className="nav-link" to="/admin/orders">
                                <span className="menu-icon">
                                    <i className="mdi mdi-credit-card"></i>
                                </span>
                                <span className="menu-title fs-5 text-muted" id="navigatehover">Orders</span>
                            </Link>
                        </li>

                        <li className="nav-item menu-items">
                            <Link className="nav-link" to="/admin/writers">
                                <span className="menu-icon">
                                    <i className="mdi mdi-file-alert"></i>
                                </span>
                                <span className="menu-title fs-5 text-muted" id="navigatehover">Writers</span>
                            </Link>
                        </li>

                    </ul>

                </div>


            // </div>


        )
    }
}

export default AdminSidebar
