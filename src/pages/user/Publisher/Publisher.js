import React, { useEffect } from 'react';
import Lottie from 'react-lottie'; //import react-lottie

import RocketLottie from "./rocketCloud.json" //import lottie animation Json file
import styles from './Publish.module.css';
import { useSelector } from 'react-redux';

function Publisher() {

    const theme = useSelector((state) => state.theme.currentTheme);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    let rocketObj = {
        loop: true,
        autoplay: true,
        animationData: RocketLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div className={`container-fluid content ${theme === "night" ? "bg-dark" : "bg-white"}`}>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className={styles.sectionTitle}>
                                {/* eslint-disable-next-line */}
                                <h3>Publish Your Book Now!🚀</h3>
                                <p className={theme === "night" ? styles.lightTxt : "text-secondary"}>Now you can publish your book on E-Bookalypse! Register your details and a brief
                                    summry of your book and we will contact you as soon as possible! </p>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-7 col-lg-8 m-15px-tb">
                            <div className="contact-form">
                                <form className="contactform contact_form" id="contact_form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="fname" name='fname' type="text" placeholder="First Name" className={theme === "night" ? styles.formControlNight : styles.formControl} 
                                                pattern="[A-Za-z]{3,}" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="lname" name='lname' type="text" placeholder="Last Name" className={theme === "night" ? styles.formControlNight : styles.formControl} 
                                                pattern="[A-Za-z]{3,}" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="email" name='email' type="text" placeholder="Email Address" className={theme === "night" ? styles.formControlNight : styles.formControl} 
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="phone" name='phone' type="text" placeholder="Phone" className={theme === "night" ? styles.formControlNight : styles.formControl} 
                                                pattern="[0-9]{11,}" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <input id="subject" name="subject" type="text" placeholder="Book's Name" className={theme === "night" ? styles.formControlNight : styles.formControl} 
                                                pattern="[A-Za-z0-9]{5,}" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea id="message" name='message' placeholder="Book's Discreption" className={`${theme === "night" ? styles.formControlNight : styles.formControl} fs-5`} rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">

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

export default Publisher