import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import styles from './Footer.module.css';
import navbar from '../NavBar/NavBar.module.css';

function Footer() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`container-fluid shadow-lg bg-${theme === "night" ? "dark" : "light"} text-light p-3 position-relative`}>
      <p className={theme === "night" ? styles.copyrightsNight : styles.copyrights}>©2022 Copyright E-Bookalypse | All Rights Reserved</p>
      <div className='row justify-content-center'>
        <div className={`col-lg-3 col-12 ${theme === "night" ? styles.footerItemNight : styles.footerItem} text-center`}>
          <h5>Support</h5>
          <ul className='list-unstyled'>
            <li className='my-1'><Link to="/aboutus" className={`text-decoration-none ${theme === "night" ? navbar.navItemNight : navbar.navItem}`}>About Us</Link></li>
            <li className='my-1'><Link to="/contactus" className={`text-decoration-none ${theme === "night" ? navbar.navItemNight : navbar.navItem}`}>Contact Us</Link></li>
            <li className='my-1'><Link to="/publishwithus" className={`text-decoration-none ${theme === "night" ? navbar.navItemNight : navbar.navItem}`}>Publish with us</Link></li>
          </ul>
        </div>
        <div className={`col-lg-6 col-12 d-flex align-items-center ${theme === "night" ? styles.footerItemNight : styles.footerItem} row mb-lg-0 mb-3`}>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/termsofuse" className={`text-decoration-none ${theme === "night" ? navbar.navItemNight : navbar.navItem}`}>Terms of Use</Link></div>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/refundpolicy" className={`text-decoration-none ${theme === "night" ? navbar.navItemNight : navbar.navItem}`}>Refund Policy</Link></div>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/paymentpolicy" className={`text-decoration-none ${theme === "night" ? navbar.navItemNight : navbar.navItem}`}>Payment Policy</Link></div>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/privacypolicy" className={`text-decoration-none ${theme === "night" ? navbar.navItemNight : navbar.navItem}`}>Privacy Policy</Link></div>
        </div>
        <div className={`col-lg-3 col-12 text-center ${theme === "night" ? styles.footerItemNight : styles.footerItem} mb-3 mb-lg-0`}>
          <h5 className='mb-3'>Connect with us</h5>
          <div className='row justify-content-center'>
            <div className={`col-3 ${styles.mediaIconContainer}`}>
              <a href='http://www.facebook.com' target="_blank" ><FaFacebookF className={theme === "night" ? styles.mediaIconNight : styles.mediaIcon} /></a>
            </div>
            <div className={`col-3 ${styles.mediaIconContainer}`}>
              <a href='http://www.twitter.com' target="_blank" ><BsTwitter className={theme === "night" ? styles.mediaIconNight : styles.mediaIcon} /></a>
            </div>
            <div className={`col-3 ${styles.mediaIconContainer}`}>
              <a href='http://www.instagram.com' target="_blank"><RiInstagramFill className={theme === "night" ? styles.mediaIconNight : styles.mediaIcon} /></a>
            </div>
            <div className={`col-3 ${styles.mediaIconContainer}`}>
              <a href='http://www.linkedin.com' target="_blank"><FaLinkedinIn className={theme === "night" ? styles.mediaIconNight : styles.mediaIcon} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer