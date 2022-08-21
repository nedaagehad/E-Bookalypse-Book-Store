import React from 'react'
import dashstyle from '../../assetsAdmin/css/style.module.css'
import "../../assetsAdmin/vendors/mdi/css/materialdesignicons.min.css"
import "../../assetsAdmin/vendors/flag-icon-css/css/flag-icon.min.css"
import "../../assetsAdmin/AdminDashboard.css";
import logo from "../../assetsAdmin/images/logo2.png";

function AdminNavbar(props) {

  const { user, userImg } = props

  if (user) {

    return (
      <div>
        <div className="page-body-wrapper">

          <nav className={`${dashstyle.navbar} p-0 fixed-top d-flex flex-row`}>
            <div className={`${dashstyle.navbarBrandWrapper} d-flex d-lg-none align-items-center justify-content-center`}>
              <button className={`${dashstyle.navbarBrand} ${dashstyle.brandLogoMini} movvv `} type="button" ><img src={logo} alt="logo" /> E-Bookalypse</button>
            </div>

            <div className={`${dashstyle.navbarMenuWrapper} flex-grow d-flex align-items-stretch`}>

              <button className={`${dashstyle.navbarToggler} align-self-center`} type="button" data-toggle="minimize">
                <span className="mdi mdi-menu movvvv"></span>
              </button>

              <ul className={`${dashstyle.navbarNav} w-100`}>
                <li className={`${dashstyle.navItem} w-100`}>
                  <form className={`${dashstyle.navLink} mt-2 mt-md-0 d-none d-lg-flex ${dashstyle.search}`}>
                    <input type="text" className="form-control text-muted fs-5" placeholder="Search on E-Bookalypse" />
                  </form>
                </li>
              </ul>
              <ul className={`${dashstyle.navbarNav} ${dashstyle.navbarNavRight}`}>

                <li className={`${dashstyle.navItem} ${dashstyle.dropdown} border-left`}>
                {/* eslint-disable-next-line */}
                  <a className={`${dashstyle.navLink} ${dashstyle.countIndicator}`} href="" >
                    <i className="mdi mdi-bell" id='hovericon'></i>
                    <span className={`${dashstyle.count} ${dashstyle.bgDanger}`}></span>
                  </a>

                </li>
                <li className={`${dashstyle.navItem} ${dashstyle.dropdown}`}>
                {/* eslint-disable-next-line */}
                  <a className={`${dashstyle.navLink}`} href="">
                    <div className={`${dashstyle.navbarProfile}`}>
                      <img className={`${dashstyle.imgXs} rounded-circle`} src={userImg} alt="" />
                      <p className={`mb-0 d-none d-sm-block ${dashstyle.navbarProfileName}`} id='hovericon'>{user.fName + ' ' + user.lName}</p>

                    </div>
                  </a>

                </li>
              </ul>
              <button className={`${dashstyle.navbarToggler} ${dashstyle.navbarTogglerRight} d-lg-none align-self-center`} type="button" data-toggle="offcanvas" >
                <span className="mdi mdi-format-line-spacing" id='hovericon' ></span>
              </button>
            </div>
          </nav>
        </div>
      </div>

    )

  }
}

export default AdminNavbar
