import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classes from './ForgetForm.module.css'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { booksApi } from "../../store/services";
import {  toast } from 'react-toastify';


const ForgetForm = props => {

  let navigate = useNavigate();

  const theme = useSelector((state) => state.theme.currentTheme);

  const [passShowState, setPassShowState] = useState({
    isShown: false,
    inputType: "password",
    iconClass: "bi bi-eye-slash"
  })


  const authState = useSelector(state => state.auth.userRole)
  // eslint-disable-next-line
  const [forgetPassword, loginresponse] = booksApi.useForegetPasswordMutation();

  useEffect(() => {
    if (authState === 'regUser') {
      navigate('/')
    } else if (authState === 'rootAdmin') {
      navigate('/admin')
    }
  }, [authState]);

  // eslint-disable-next-line
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
    userName: Yup.string().required("Field is required"),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={theme === "night" ? classes.formNight : classes.form}>
            <h2>Forget Password</h2>
            <Formik
              initialValues={{
                userName: "",
                thePassword: ""
              }}
              validationSchema={loginSchema}
              onSubmit={values => {
                const data = {

                  email: values.userName,
                }
                forgetPassword(data)
                  .then(function (response) {
                    console.log(response)
                    if(response.data){
                      toast.success("Check Your Mail")
                    }else{
                      toast.error(response.error.data.message)

                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                    toast.error(error.data.message)

                  });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-group mb-3">
                    <label htmlFor="userName" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                      Email
                    </label>
                    <Field name="userName" className={`form-control ${errors.userName ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="text" placeholder="E-mail " />
                    {errors.userName && touched.userName ? (
                      <div className="form-text text-danger">{errors.userName}</div>
                    ) : null}
                  </div>

                  <button type="submit" className={classes.btn}>
                    Send
                  </button>
                </Form>)}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetForm