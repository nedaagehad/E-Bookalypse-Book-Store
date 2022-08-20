import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classes from './SignUpForm.module.css'
import { IoPersonAdd } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
const axios = require('axios');



const SignUpForm = props => {

    const theme = useSelector((state) => state.theme.currentTheme);

    const [passShowState, setPassShowState] = useState({
        isShown: false,
        inputType: "password",
        iconClass: "bi bi-eye-slash"
    })


    const toggleShowPass = () => {
        if (passShowState.isShown) {
            setPassShowState({
                isShown: false,
                inputType: "password",
                iconClass: "bi bi-eye-slash"
            })
        } else {
            setPassShowState({
                isShown: true,
                inputType: "text",
                iconClass: "bi bi-eye"
            })
        }
    }

    let navigate = useNavigate()

    const SignUpSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, "too short")
            .max(20, "too long")
            .matches(/^[a-zA-z]+$/, "first name contains only letters")
            .required("required"),

        lastName: Yup.string()
            .min(3, "too short")
            .max(20, "too long")
            .matches(/^[a-zA-z]+$/, "last name contains only letters")
            .required("required"),

        userName: Yup.string()
            .min(3, "too short")
            .max(20, "too long")
            .matches(/^[_a-zA-Z0-9]+$/, "user name is not valid remove any space or special character except _")
            .required("required"),

        theEmail: Yup.string()
            .email("email is not valid")
            .required("email is required"),

        thePhone: Yup.string()
            .matches(/^010[0-9]{8}$|011[0-9]{8}$|012[0-9]{8}$|015[0-9]{8}$/, "number in not valid")
            .required("mobile number is required"),

        thePassword: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
            .required("Password is required"),

        cnfrmPass: Yup.string()
            .required("field is required"),

        theGender: Yup.string("must be string")
            .required("Gender is required"),

        birthDate: Yup.date()
            .max(new Date('01-01-2007'), "you are not allowed")
            .required("Birth date is required"),

        theStreet: Yup.string()
            .min(3, "too short")
            .max(30, "too long")
            .required("Required"),

        theCity: Yup.string()
            .min(3, "too short")
            .max(30, "too long")
            .required("Required"),

        theGovernorate: Yup.string()
            .min(3, "too short")
            .max(30, "too long")
            .required("Required")

    });


    const [userImage, setUserImage] = useState();
    let onFileChange = (e) => {
        setUserImage(e.target.files[0])
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className={theme === "night" ? classes.formNight : classes.form}>
                        <h2>Sign Up</h2>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                theEmail: "",
                                thePhone: "",
                                userName: "",
                                thePassword: "",
                                cnfrmPass: "",
                                theGender: "",
                                birthDate: "",
                                theStreet: "",
                                theCity: "",
                                theGovernorate: ""
                            }}
                            validationSchema={SignUpSchema}
                            validate={(values) => {
                                const errors = {};
                                if (values.cnfrmPass !== values.thePassword) {
                                    errors.cnfrmPass = 'do not match';
                                }
                                return errors;
                            }}
                            onSubmit={values => {
                                const data = new FormData();
                                data.append('userImage', userImage)
                                data.append("fName", values.firstName)
                                data.append("lName", values.lastName)
                                data.append("date_birth", values.birthDate)
                                data.append("gender", values.theGender)
                                data.append("street", values.theStreet)
                                data.append("city", values.theCity)
                                data.append("governorate", values.theGovernorate)
                                data.append("userName", values.userName)
                                data.append("email", values.theEmail)
                                data.append("phone", values.thePhone)
                                data.append("pass", values.thePassword)

                                axios.post('https://e-bookalypse.herokuapp.com/signUp', data)

                                    .then(function (response) {
                                        navigate('/login')
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className={classes.avatar}>
                                        <p><IoPersonAdd /></p>
                                        <input type="file" id="userImage" name="userImage" class={classes.customFileInput} style={{ width: "20px", position: "relative", bottom: "70px" }} onChange={(e) => onFileChange(e)} />
                                    </div>
                                    <div className="row">
                                        <div className="form-group mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="firstName" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                First name
                                            </label>
                                            <Field name="firstName" className={`form-control ${errors.firstName ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="text" />
                                            {errors.firstName && touched.firstName ? (
                                                <div className="form-text text-danger">{errors.firstName}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="lastName" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                Last name
                                            </label>
                                            <Field name="lastName" className={`form-control ${errors.lastName ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="text" />
                                            {errors.lastName && touched.lastName ? (
                                                <div className="form-text text-danger">{errors.lastName}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="userName" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                Username
                                            </label>
                                            <Field name="userName" className={`form-control ${errors.userName ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="text" />
                                            {errors.userName && touched.userName ? (
                                                <div className="form-text text-danger">{errors.userName}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group mb-3 col-md-6 col-sm-126">
                                            <label htmlFor="theEmail" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                Email
                                            </label>
                                            <Field name="theEmail" className={`form-control ${errors.theEmail ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="email" />
                                            {errors.theEmail && touched.theEmail ? (
                                                <div className="form-text text-danger">{errors.theEmail}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="thePhone" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                Mobile                                </label>
                                            <Field name="thePhone" className={`form-control ${errors.thePhone ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="text" />
                                            {errors.thePhone && touched.thePhone ? (
                                                <div className="form-text text-danger">{errors.thePhone}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group mb-3 col-md-6 col-sm-12" >
                                            <label htmlFor="thePassword" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                Password
                                            </label>
                                            <span className={classes.passwordVisiblity}><i className={passShowState.iconClass} onClick={toggleShowPass}></i></span>
                                            <Field name="thePassword" className={`form-control ${errors.thePassword ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type={passShowState.inputType} />
                                            {errors.thePassword && touched.thePassword ? (
                                                <div className="form-text text-danger">{errors.thePassword}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group mb-3 col-12">
                                            <label htmlFor="cnfrmPass" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                Confirm Password
                                            </label>
                                            <Field name="cnfrmPass" className={`form-control ${errors.cnfrmPass ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type={passShowState.inputType} />
                                            {errors.cnfrmPass && touched.cnfrmPass ? (
                                                <div className="form-text text-danger">{errors.cnfrmPass}</div>
                                            ) : null}
                                        </div>
                                        <div className="form-group mb-3 col-md-12 col-sm-12">
                                            <div className="row" >
                                                <label htmlFor="Gender" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`} style={{ marginTop: "40px" }}>Gender : </label>
                                                <br />
                                                <div className="col-md-6 col-sm-6">
                                                    <label>
                                                        <Field type="radio" class="form-check-input" name="theGender" value="male" />

                                                        <span className={`mx-1 ${theme === "night" ? classes.lightTxt : ""}`}>Male</span>

                                                    </label>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <label>
                                                        <Field type="radio" class="form-check-input" name="theGender" value="female" />

                                                        <span className={`mx-1 ${theme === "night" ? classes.lightTxt : ""}`}>Female</span>

                                                    </label>
                                                </div>
                                            </div>
                                            {errors.theGender && touched.theGender ? (
                                                <div className="form-text text-danger">{errors.theGender}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group mb-3 col-md-6 col-sm-12" >
                                            <label htmlFor="birthDate" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                Birth date
                                            </label>
                                            <Field name="birthDate" className={`form-control ${errors.birthDate ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="date" />
                                            {errors.birthDate && touched.birthDate ? (
                                                <div className="form-text text-danger">{errors.birthDate}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="theStreet" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                Street
                                            </label>
                                            <Field name="theStreet" className={`form-control ${errors.theStreet ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="text" />
                                            {errors.theStreet && touched.theStreet ? (
                                                <div className="form-text text-danger">{errors.theStreet}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="theCity" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                City
                                            </label>
                                            <Field name="theCity" className={`form-control ${errors.theCity ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="text" />
                                            {errors.theCity && touched.theCity ? (
                                                <div className="form-text text-danger">{errors.theCity}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group mb-3 col-md-6 col-sm-12">
                                            <label htmlFor="theGovernorate" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                                                Governorate
                                            </label>
                                            <Field name="theGovernorate" className={`form-control ${errors.theGovernorate ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="text" />
                                            {errors.theGovernorate && touched.theGovernorate ? (
                                                <div className="form-text text-danger">{errors.theGovernorate}</div>
                                            ) : null}
                                        </div>

                                        <button type="submit" className={classes.btn} aria-describedby="submitverifyHelp">
                                            Register
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm