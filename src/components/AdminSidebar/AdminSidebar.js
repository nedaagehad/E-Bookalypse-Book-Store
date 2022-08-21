import React from 'react'
import dashstyle from '../../assetsAdmin/css/style.module.css'
import "../../assetsAdmin/vendors/mdi/css/materialdesignicons.min.css"
import "../../assetsAdmin/vendors/flag-icon-css/css/flag-icon.min.css"
import "../../assetsAdmin/AdminDashboard.css";
import { Link } from 'react-router-dom';

function AdminSidebar(props) {

    const { user, userImg } = props

    if (user) {
        return (
            // <div>
            <div className={`${dashstyle.sidebar} ${dashstyle.sidebarOffcanvas}`} id="sidebar" >

                <div className={`${dashstyle.sidebarBrandWrapper} d-none d-lg-flex align-items-center justify-content-center fixed-top`}>
                    <Link className={`${dashstyle.sidebarBrand} ${dashstyle.brandLogo}`} to=""></Link>
                </div>

                <ul className={`${dashstyle.nav}`}>
                    <li className={`${dashstyle.navItem} ${dashstyle.profile}`}>
                        <div className={`${dashstyle.profileDesc}`}>
                            <div className={`${dashstyle.profilePic}`}>
                                <div className={`${dashstyle.countIndicator}`}>
                                    <img className={`${dashstyle.imgXs} rounded-circle`}  src={userImg} alt="" />
                                <span className={`${dashstyle.count} ${dashstyle.bgSuccess}`}></span>
                                </div>
                                <div className={`${dashstyle.profileName}`}>
                                    <h5 className="mb-0 font-weight-bold text-white">{user.fName + " " + user.lName}</h5>
                                    <span >Admin</span>
                                </div>
                            </div>

                        </div>
                    </li>
                    <li className={`${dashstyle.navItem} ${dashstyle.navCategory}`}>
                        <span className={`${dashstyle.navLink}`}>Navigation</span>
                    </li>
                    <li className={`${dashstyle.navItem} ${dashstyle.menuItems}`}>
                        <Link className={`${dashstyle.navLink}`} to="/">
                            <span className={`${dashstyle.menuIcon}`}>
                                <i className="mdi mdi-home"></i>
                            </span>
                            <span className={`${dashstyle.menuTitle} fs-5 text-muted`} id="navigatehover">E-Bookalypse</span>
                        </Link>
                    </li>
                    <li className={`${dashstyle.navItem} ${dashstyle.menuItems}`}>
                        <Link className={`${dashstyle.navLink}`} to="/admin">
                            <span className={`${dashstyle.menuIcon}`}>
                                <i className="mdi mdi-speedometer"></i>
                            </span>
                            <span className={`${dashstyle.menuTitle} fs-5 text-muted`} id="navigatehover">Dashboard</span>
                        </Link>
                    </li>
                    <li className={`${dashstyle.navItem} ${dashstyle.menuItems}`}>
                        <Link className={`${dashstyle.navLink}`} to="/admin/books">
                            <span className={`${dashstyle.menuIcon}`}>
                                <i className="mdi mdi-book"></i>
                            </span>
                            <span className={`${dashstyle.menuTitle} fs-5 text-muted`} id="navigatehover">Books</span>
                        </Link>
                    </li>

                    <li className={`${dashstyle.navItem} ${dashstyle.menuItems}`}>
                        <Link className={`${dashstyle.navLink}`} to="/admin/categories">
                            <span className={`${dashstyle.menuIcon}`}>
                                <i className="mdi mdi-table-large"></i>
                            </span>
                            <span className={`${dashstyle.menuTitle} fs-5 text-muted`} id="navigatehover">Categories</span>
                        </Link>
                    </li>

                    <li className={`${dashstyle.navItem} ${dashstyle.menuItems}`}>
                        <Link className={`${dashstyle.navLink}`} to="/admin/users">
                            <span className={`${dashstyle.menuIcon}`}>
                                <i className="mdi mdi-contacts"></i>
                            </span>
                            <span className={`${dashstyle.menuTitle} fs-5 text-muted`} id="navigatehover">Users</span>
                        </Link>
                    </li>
                    <li className={`${dashstyle.navItem} ${dashstyle.menuItems}`}>
                        <Link className={`${dashstyle.navLink}`} to="/admin/collections">
                            <span className={`${dashstyle.menuIcon}`}>
                                <i className="mdi mdi-playlist-play"></i>
                            </span>
                            <span className={`${dashstyle.menuTitle} fs-5 text-muted`} id="navigatehover">Collections</span>
                        </Link>
                    </li>

                    <li className={`${dashstyle.navItem} ${dashstyle.menuItems}`}>
                        <Link className={`${dashstyle.navLink}`} to="/admin/promotions">
                            <span className={`${dashstyle.menuIcon}`}>
                                <i className="mdi mdi-history"></i>
                            </span>
                            <span className={`${dashstyle.menuTitle} fs-5 text-muted`} id="navigatehover">Promotions</span>
                        </Link>
                    </li>

                    <li className={`${dashstyle.navItem} ${dashstyle.menuItems}`}>
                        <Link className={`${dashstyle.navLink}`} to="/admin/writers">
                            <span className={`${dashstyle.menuIcon}`}>
                                <i className="mdi mdi-file-alert"></i>
                            </span>
                            <span className={`${dashstyle.menuTitle} fs-5 text-muted`} id="navigatehover">Writers</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default AdminSidebar
