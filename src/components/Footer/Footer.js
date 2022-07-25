
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri'

function Footer() {
  return (
    <div className="container-fluid bg-dark text-light p-3 position-relative">
      <p className="copyrights">©2022 Copyright E-Bookalypse | All Rights Reserved</p>
      <div className='row justify-content-center'>
        <div className='col-lg-3 col-12 footer-item text-center'>
          <h5>Support</h5>
          <ul className='list-unstyled'>
            <li className='my-1'><Link to="/aboutus" className='text-decoration-none nav-item-night'>About Us</Link></li>
            <li className='my-1'><Link to="/contactus" className='text-decoration-none nav-item-night'>Contact Us</Link></li>
            <li className='my-1'><Link to="/publishwithus" className='text-decoration-none nav-item-night'>Publish with us</Link></li>
          </ul>
        </div>
        <div className='col-lg-6 col-12 d-flex align-items-center footer-item row mb-lg-0 mb-3'>
          {/* <div className=' justify-content-center'> */}
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/termsofuse" className='text-decoration-none nav-item-night'>Terms of Use</Link></div>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/refundpolicy" className='text-decoration-none nav-item-night'>Refund Policy</Link></div>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/paymentpolicy" className='text-decoration-none nav-item-night'>Payment Policy</Link></div>
            <div className='col-lg-3 col-12 text-center my-1'><Link to="/privacypolicy" className='text-decoration-none nav-item-night'>Privacy Policy</Link></div>
          {/* </div> */}
        </div>
        <div className='col-lg-3 col-12 text-center footer-item mb-3 mb-lg-0'>
          <h5 className='mb-3'>Connect with us</h5>
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