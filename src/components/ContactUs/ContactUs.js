import React from 'react';
import Lottie from 'react-lottie'; //import react-lottie
import { useSelector } from 'react-redux';

import RocketLottie from "./rocketCloud.json" //import lottie animation Json file
import styles from './ContactUs.module.css';

function ContactUs() {

    const theme = useSelector((state) => state.theme.currentTheme);

    let rocketObj = {
        loop: true,
        autoplay: true,
        animationData: RocketLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div className='container-fluid content'>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className={styles.sectionTitle}>
                        {/* eslint-disable-next-line */}
                            <h2>Contact Us Now!🚀</h2>
                            <p className={theme === "night" ? styles.lightTxt : "text-secondary"}>Now you can contact us if you have any message, feedback complaint and suggestion,
                                We are always interested in hearing them! </p>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-7 col-lg-8">
                        <div className="contact-form">
                            <form className="contactform contact_form" id="contact_form">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="Fname" name="Fname" type="text" placeholder="First Name" className={theme === "night" ? styles.formControlNight : styles.formControl}
                                                pattern="[A-Za-z]{3,}" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="Lname" name="Lname" type="text" placeholder="Last Name" className={theme === "night" ? styles.formControlNight : styles.formControl}
                                                pattern="[A-Za-z]{3,}" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="email" name="email" type="text" placeholder="Email Address" className={theme === "night" ? styles.formControlNight : styles.formControl}
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="phone" name="phone" type="text" placeholder="Phone" className={theme === "night" ? styles.formControlNight : styles.formControl}
                                                pattern="[0-9]{11,}" />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <input id="subject" name="subject" type="text" placeholder="Title" className={theme === "night" ? styles.formControlNight : styles.formControl}
                                                pattern="[A-Za-z0-9]{5,}" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea id="message" name='message' placeholder="Message" className={`${theme === "night" ? styles.formControlNight : styles.formControl} fs-5`} rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-5 mb-lg-0">
                                        <button className={`btn ${styles.submitBtn} fs-5 mt-1`}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-5 col-lg-4 col-12 d-flex align-items-center m-0 p-0 ">
                        <Lottie options={rocketObj}
                            height={410}
                            width={410}
                            isStopped={false}
                            isPaused={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs