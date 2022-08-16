import React, { useState } from 'react'
import '../../assetsAdmin/css/style.css'
import "../../assetsAdmin/vendors/mdi/css/materialdesignicons.min.css"
import "../../assetsAdmin/vendors/flag-icon-css/css/flag-icon.min.css"
import "../../assetsAdmin/AdminDashboard.css";
// import style from "../../assetsAdmin/AdminDashboard.module.css";
import face15 from "../../assetsAdmin/images/faces/face15.jpg";


function AdminSidebar() {  
    return (
        // <div>
            <div className="sidebar sidebar-offcanvas" id="sidebar" >

                <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                    <a className="sidebar-brand brand-logo" href=""></a>
                    {/* <a className="sidebar-brand brand-logo-mini" href=""><img src="./assets/images/logo-mini.svg" alt="logo" /></a> */}
                </div>

                <ul className="nav ">
                    <li className="nav-item profile">
                        <div className="profile-desc pt-5">
                            <div className="profile-pic">
                                <div className="count-indicator">
                                    <img className="img-xs rounded-circle " src={face15} alt="" />
                                    <span className="count bg-success"></span>
                                </div>
                                <div className="profile-name">
                                    <h5 className="mb-0 font-weight-bold text-white">Hussein Alaa</h5>
                                    <span >Admin</span>
                                </div>
                            </div>
                            {/* <a href="#" id="profile-dropdown" data-toggle="dropdown"> <i className="mdi mdi-dots-vertical"></i></a> */}

                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">Navigation</span>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="/admin/dashboard">
                            <span className="menu-icon">
                                <i className="mdi mdi-speedometer"></i>
                            </span>
                            <span className="menu-title fs-5 text-muted" id="navigatehover">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="/admin/books">
                            <span className="menu-icon">
                                <i className="mdi mdi-book"></i>
                            </span>
                            <span className="menu-title fs-5 text-muted" id="navigatehover">Books</span>
                        </a>
                    </li>
                    {/* <li className="nav-item menu-items">
          <a className="nav-link" href="">
            <span className="menu-icon">
              <i className="mdi mdi-playlist-play"></i>
            </span>
            <span className="menu-title">Form Elements</span>
          </a>
        </li> */}
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="/admin/categories">
                            <span className="menu-icon">
                                <i className="mdi mdi-table-large"></i>
                            </span>
                            <span className="menu-title fs-5 text-muted" id="navigatehover">Categories</span>
                        </a>
                    </li>
                    {/* <li className="nav-item menu-items">
                        <a className="nav-link" href="">
                            <span className="menu-icon">
                                <i className="mdi mdi-chart-bar"></i>
                            </span>
                            <span className="menu-title fs-5">Charts</span>
                        </a>
                    </li> */}
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="/admin/users">
                            <span className="menu-icon">
                                <i className="mdi mdi-contacts"></i>
                            </span>
                            <span className="menu-title fs-5 text-muted" id="navigatehover">Users</span>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="">
                            <span className="menu-icon">
                                <i className="mdi mdi-playlist-play"></i>
                            </span>
                            <span className="menu-title fs-5 text-muted" id="navigatehover">User Pages</span>
                        </a>
                    </li>

                    <li className="nav-item menu-items">
                        <a className="nav-link" href="/admin/">
                            <span className="menu-icon">
                                <i className="mdi mdi-history"></i>
                            </span>
                            <span className="menu-title fs-5 text-muted" id="navigatehover">Promotions</span>
                        </a>
                    </li>

                    <li className="nav-item menu-items">
                        <a className="nav-link" href="">
                            <span className="menu-icon">
                                <i className="mdi mdi-credit-card"></i>
                            </span>
                            <span className="menu-title fs-5 text-muted" id="navigatehover">Orders</span>
                        </a>
                    </li>

                    <li className="nav-item menu-items">
                        <a className="nav-link" href="">
                            <span className="menu-icon">
                                <i className="mdi mdi-file-alert"></i>
                            </span>
                            <span className="menu-title fs-5 text-muted" id="navigatehover">Writers</span>
                        </a>
                    </li>

                </ul>

            </div>


        // </div>


    )
}

export default AdminSidebar
