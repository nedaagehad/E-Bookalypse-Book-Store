import React from 'react';
import Lottie from 'react-lottie'; //import react-lottie
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import RocketLottie from "./rocketCloud.json" //import lottie animation Json file
import styles from './ContactUs.module.css';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { booksApi } from '../../store/services';

function ContactUs() {

    const theme = useSelector((state) => state.theme.currentTheme);
    const [contactus] = booksApi.useContactUSMutation()
    let rocketObj = {
        loop: true,
        autoplay: true,
        animationData: RocketLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const ContactSchema = Yup.object().shape({
        fName: Yup.string().min(3, "too short")
        .max(20, "too long")
        .matches(/^[a-zA-z]+$/, "first name contains only letters")
        .required("required"),

        lName:Yup.string().min(3, "too short")
        .max(20, "too long")
        .matches(/^[a-zA-z]+$/, "Last name contains only letters")
        .required("required"),

        email:Yup.string()
            .email("email is not valid")
            .required("email is required"),

        phone: Yup.string()
            .matches(/^010[0-9]{8}$|011[0-9]{8}$|012[0-9]{8}$|015[0-9]{8}$/, "number in not valid")
            .required("mobile number is required"),
        title:Yup.string()
        .min(3, "too short")
        .max(20, "too long")
        .required("required"),


        msg:Yup.string()
        .min(3, "too short")
        .max(100, "too long")
        .required("required")

    })

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
                            <Formik 
                                initialValues={{
                                    fName:'',
                                    lName:'',
                                    email:'',
                                    phone:'',
                                    title:"",
                                    msg:""

                                }}
                                validationSchema={ContactSchema}
                                onSubmit={
                                    values=>{
                                        const data = {
                                            fName:values.fName,
                                            lName:values.lName,
                                            email:values.email,
                                            phone:values.phone,
                                            title:values.title,
                                            msg:values.msg,
                                        }

                                        console.log(data)
                                        contactus(data).then((r)=>{
                                            console.log(r)
                                            if(r.data){
                                                toast.success(r.data.msg)
                                            }else{
                                                toast.error(r.error.msg)
                                            }
                                        }).catch((e)=>{
                                            toast.error(e)
                                        })
                                    }
                                }
                            
                            >
                                {({ errors, touched }) => (

                                    <Form className="contactform contact_form" id="contact_form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <Field id="fName" name="fName" type="text" placeholder="First Name" className={theme === "night" ? styles.formControlNight : styles.formControl}
                                                        pattern="[A-Za-z]{3,}" />
                                                    {errors.fName && touched.fName ? (
                                                        <div className="form-text text-danger">{errors.fName}</div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <Field id="lName" name="lName" type="text" placeholder="Last Name" className={theme === "night" ? styles.formControlNight : styles.formControl}
                                                        pattern="[A-Za-z]{3,}" />
                                                        {errors.lName && touched.lName ? (
                                                        <div className="form-text text-danger">{errors.lName}</div>
                                                        ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <Field id="email" name="email" email="text" placeholder="Email Address" className={theme === "night" ? styles.formControlNight : styles.formControl}
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                                                        {errors.email && touched.email ? (
                                                        <div className="form-text text-danger">{errors.email}</div>
                                                        ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <Field id="phone" name="phone" type="text" placeholder="Phone" className={theme === "night" ? styles.formControlNight : styles.formControl}
                                                         />
                                                        {errors.phone && touched.phone ? (
                                                        <div className="form-text text-danger">{errors.phone}</div>
                                                        ) : null}
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <Field id="title" name="title" type="text" placeholder="Title" className={theme === "night" ? styles.formControlNight : styles.formControl}
                                                        pattern="[A-Za-z0-9]{5,}" />
                                                        {errors.title && touched.title ? (
                                                        <div className="form-text text-danger">{errors.title}</div>
                                                        ) : null}
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <Field as="textarea" id="msg" name='msg' placeholder="Message" className={`${theme === "night" ? styles.formControlNight : styles.formControl} fs-5`} rows="3"/>
                                                    {errors.msg && touched.msg ? (
                                                        <div className="form-text text-danger">{errors.msg}</div>
                                                        ) : null}
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-5 mb-lg-0">
                                                <button type="submit" className={`btn ${styles.submitBtn} fs-5 mt-1`}>Submit</button>
                                            </div>
                                        </div>
                                    </Form>

                                ) }

                            </Formik>
        
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