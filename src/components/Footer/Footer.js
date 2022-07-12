import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri'

function Footer() {
  return (
    <div className="container-fluid bg-dark text-light px-5 py-3 position-relative">
      <p className="copyrights">© 2022 Copyright E-Bookalypse | All Rights Reserved</p>
      <div className='row justify-content-center'>
        <div className='col-3 footer-item text-center'>
          <h5>Support</h5>
          <ul className='list-unstyled'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Publish with us</li>
          </ul>
        </div>
        <div className='col-5 d-flex align-items-center justify-content-center'>
          <div className='footer-item'>
            <span>Terms of Use</span> | &nbsp;
            <span>Refund Policy</span> | &nbsp;
            <span>Payment Policy</span> | &nbsp;
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className='col-4 text-center footer-item'>
          <h5>Connect with us</h5>
          <div className='row justify-content-center'>
            <div className='col-3 media-icon-container'>
              <a href='http://www.facebook.com' target="_blank" ><FaFacebookF className='media-icon-night' /></a>
            </div>
            <div className='col-3 media-icon-container'>
              <a href='http://www.twitter.com' target="_blank" ><BsTwitter className='media-icon-night' /></a>
            </div>
            <div className='col-3 media-icon-container'>
              <a href='http://www.instagram.com' target="_blank"><RiInstagramFill className='media-icon-night' /></a>
            </div>
            <div className='col-3 media-icon-container'>
              <a href='http://www.linkedin.com' target="_blank"><FaLinkedinIn className='media-icon-night' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer