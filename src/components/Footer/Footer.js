import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri'

function Footer() {
  return (
    <div className="container-fluid bg-dark text-light px-5 py-3">
      <div className='row justify-content-center'>
        <div className='col-3'>
          <h5>Support</h5>
          <ul className='list-unstyled'>
            <li>About Us</li>
            <li>Refund Policy</li>
            <li>Terms of Use</li>
            <li>Payment Policy</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='col-5 d-flex align-items-center justify-content-center border border-danger'>
          <p>© 2022 Copyright E-Bookalypse | All Rights Reserved</p>
        </div>
        <div className='col-4 text-center'>
          <h5>Connect with us</h5>
          <div className='row p-1'>
            <div className='col-3'>
              <FaFacebookF className='media-icon' />
            </div>
            <div className='col-3'>
              <BsTwitter className='media-icon' />
            </div>
            <div className='col-3'>
              <RiInstagramFill className='media-icon' />
            </div>
            <div className='col-3'>
              <FaLinkedinIn className='media-icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer