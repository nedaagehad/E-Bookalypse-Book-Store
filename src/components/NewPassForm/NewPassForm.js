import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classes from './NewPassForm.module.css'
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { booksApi } from "../../store/services";
import {  toast } from 'react-toastify';

const NewPassForm = props => {

  const theme = useSelector((state) => state.theme.currentTheme);
  let navigate = useNavigate()
  const [passShowState, setPassShowState] = useState({
    isShown: false,
    inputType: "password",
    iconClass: "bi bi-eye-slash"
  })

  let params = useParams()

  // eslint-disable-next-line
  const [newPass, loginresponse] = booksApi.useSetNewPasswordMutation();

  useEffect(() => {
    if (params.token) {

      localStorage.setItem("userToken", params.token)
    }
  }, []);

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

  const loginSchema = Yup.object().shape({

    thePassword: Yup.string()
      .required("Password is required"),



  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={theme === "night" ? classes.formNight : classes.form}>
            <h2>New Password</h2>
            <Formik
              initialValues={{
                thePassword: ""
              }}
              validationSchema={loginSchema}
              onSubmit={values => {
                const data = {
                  token: params.token,
                  pass: values.thePassword,
                }
                newPass(data)
                  .then(function (response) {
                    console.log(response)
                    if(response.data){
                      navigate("/login")
                    }else{
                      toast.error(response.error)
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                    toast.error(error)

                  });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-group mb-3 col-md-12 col-sm-12" >
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

                  <button type="submit" className={classes.btn}>
                    Submit
                  </button>
                </Form>)}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPassForm