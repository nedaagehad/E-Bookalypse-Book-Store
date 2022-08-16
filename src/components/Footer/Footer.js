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
    <div className={`container-fluid mt-auto shadow-lg ${theme === "night" ? "bg-dark" : styles.purpleBG} text-light p-3 position-relative`}>
      <p className={styles.copyrightsNight}>©2022 Copyright E-Bookalypse | All Rights Reserved</p>
      <div className='row justify-content-center'>
        <div className={`col-lg-3 col-12 ${styles.footerItemNight}`}>
          <h5 className={`text-center ${styles.footerTitle}`}>Support</h5>
          <ul className='list-unstyled'>
            <li className='my-1 text-center'><Link to="/aboutus" className={`text-decoration-none ${navbar.navItemNight}`}>About Us</Link></li>
            <li className='my-1 text-center'><Link to="/contactus" className={`text-decoration-none ${navbar.navItemNight}`}>Contact Us</Link></li>
            <li className='my-1 text-center'><Link to="/publishwithus" className={`text-decoration-none ${navbar.navItemNight}`}>Publish with us</Link></li>
          </ul>
        </div>
        <div className={`col-lg-6 col-12 d-flex align-items-center ${styles.footerItemNight} row mb-lg-0 mb-3`}>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/termsofuse" className={`text-decoration-none ${navbar.navItemNight}`}>Terms of Use</Link></div>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/refundpolicy" className={`text-decoration-none ${navbar.navItemNight}`}>Refund Policy</Link></div>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/paymentpolicy" className={`text-decoration-none ${navbar.navItemNight}`}>Payment Policy</Link></div>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/privacypolicy" className={`text-decoration-none ${navbar.navItemNight}`}>Privacy Policy</Link></div>
        </div>
        <div className={`col-lg-3 col-12 text-center ${styles.footerItemNight} mb-3 mb-lg-0`}>
          <h5 className={`mb-3 text-center ${styles.footerTitle}`}>Connect with us</h5>
          <div className='row justify-content-center'>
            <div className={`col-3 ${styles.mediaIconContainer}`}>
              <a href='http://www.facebook.com' target="_blank" ><FaFacebookF className={styles.mediaIconNight} /></a>
            </div>
            <div className={`col-3 ${styles.mediaIconContainer}`}>
              <a href='http://www.twitter.com' target="_blank" ><BsTwitter className={styles.mediaIconNight} /></a>
            </div>
            <div className={`col-3 ${styles.mediaIconContainer}`}>
              <a href='http://www.instagram.com' target="_blank"><RiInstagramFill className={styles.mediaIconNight} /></a>
            </div>
            <div className={`col-3 ${styles.mediaIconContainer}`}>
              <a href='http://www.linkedin.com' target="_blank"><FaLinkedinIn className={styles.mediaIconNight} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer