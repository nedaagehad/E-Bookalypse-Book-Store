import React, { useState } from 'react';
import { Link } from "react-router-dom" 
import Lottie from 'react-lottie'; //import react-lottie

import RocketLottie from "./rocketCloud.json" //import lottie animation Json file
import './ContactUs.css';

function ContactUs() {
    let rocketObj = {
        loop: true,
        autoplay: true,
        animationData : RocketLottie, 
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }

  return (
    <div className='container-fluid'>
        <section className="section " id="contactus">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="section-title pt-3">
                    <h2>Contact Us Now!🚀</h2>
                    <p>Now you can contact us if you have any message, feedback complaint and suggestion,  
                       We are always interested in hearing them! </p>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-md-7 col-lg-8 m-15px-tb">
                <div className="contact-form">
                     <form className="contactform contact_form" id="contact_form">
                        {/* <div className="returnmessage valid-feedback p-15px-b" data-success="Your request has been received, We will contact you soon."></div> */}
                        {/* <div className="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div> */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input id="name" type="text" placeholder="First Name" className="form-control"/> 
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <input id="name" type="text" placeholder="Last Name" className="form-control"/> 
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <input id="email" type="text" placeholder="Email Address" className="form-control"/>  
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <input id="email" type="text" placeholder="Phone" className="form-control"/>  
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">
                                    <input id="subject" type="text" placeholder="Title" className="form-control"/> 
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea id="message" placeholder="Message" className="form-control fs-5" rows="3"></textarea> 
                                </div>
                            </div>
                            <div className="col-md-12">
                               
                                    <button className="btn submitBtn fs-5 mt-1">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
             </div>  

            <div className="col-md-5 col-lg-4 d-sm-none d-md-block m-15px-tb d-flex align-items-center m-0 p-0 ">
            <Lottie options={rocketObj}
                    height={410}
                    width={410}
                    isStopped={false}
                    isPaused={false}
                />

            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default ContactUs