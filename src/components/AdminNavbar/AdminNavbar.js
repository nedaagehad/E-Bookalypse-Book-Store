import React, { useState } from 'react'
import '../../assetsAdmin/css/style.css'
import "../../assetsAdmin/vendors/mdi/css/materialdesignicons.min.css"
import "../../assetsAdmin/vendors/flag-icon-css/css/flag-icon.min.css"
import "../../assetsAdmin/AdminDashboard.css";
// import style from "../../assetsAdmin/AdminDashboard.module.css";
import logo from "../../assetsAdmin/images/logo2.png";
import face15 from "../../assetsAdmin/images/faces/face15.jpg";

function AdminNavbar() {
    return (
        <div>
            <div className="page-body-wrapper">

            <nav className="navbar p-0 fixed-top d-flex flex-row">
          <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
            <button className="navbar-brand brand-logo-mini mov" type="button" ><img src={logo} alt="logo" /> E-Bookalypse</button>
          </div>

          <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">

            <button className="navbar-toggler align-self-center" type="button" data-toggle="minimize">
              {/* <span className="mdi navbar-brand brand-logo-mini mov" > E-Bookalypse</span> */}
              <span className="mdi mdi-menu mov"></span>
            </button>

            <ul className="navbar-nav w-100">
              <li className="nav-item w-100">
                <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                  <input type="text" className="form-control text-muted fs-5" placeholder="Search on E-Bookalypse"/>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              
              {/* <li className="nav-item nav-settings d-none d-lg-block">
                <a className="nav-link" href="#">
                  <i className="mdi mdi-view-grid"></i>
                </a>
              </li> */}


              {/* <li className="nav-item dropdown border-left">
                <a className="nav-link count-indicator"  href="">
                  <i className="mdi mdi-email"></i>
                  <span className="count bg-success"></span>
                </a>
              </li> */}
                
              <li className="nav-item dropdown border-left">
                <a className="nav-link count-indicator" href="" >
                  <i className="mdi mdi-bell" id='hovericon'></i>
                  <span className="count bg-danger"></span>
                </a>
                
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="">
                  <div className="navbar-profile">
                    <img className="img-xs rounded-circle" src={face15} alt=""/>
                    <p className="mb-0 d-none d-sm-block navbar-profile-name" id='hovericon'>Hussein Alaa</p>
                    
                  </div>
                </a>
                
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas" >
              <span className="mdi mdi-format-line-spacing" id='hovericon' ></span>
            </button>
          </div>
        </nav>
        </div>
        </div>

    )
}

export default AdminNavbar
