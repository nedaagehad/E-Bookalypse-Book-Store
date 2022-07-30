import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classes from './LoginForm.module.css' 

const axios = require('axios');

const LoginForm = props => {

  const [passShowState,setPassShowState] = useState({
      isShown:false,
      inputType: "password",
      iconClass: "bi bi-eye-slash" 
  })

  const toggleShowPass = () => {
      if (passShowState.isShown){
          setPassShowState({
              isShown:false,
              inputType: "password",
              iconClass: "bi bi-eye-slash"  
          })  
      } else {
          setPassShowState({
              isShown:true,
              inputType: "text",
              iconClass: "bi bi-eye"
          })  
      }
  }

  const loginSchema = Yup.object().shape({
    
    userName: Yup.string().required("Field is required"),

    thePassword: Yup.string()
    .required("Password is required"),
    
  });
  
  return (
    <div className="container">
      <div className="row">
          <div className="col-md-12">
              <div className={classes.form}>
                        <h2>Login</h2>
                        <Formik
                            initialValues={{
                                  userName:"",
                                  thePassword:""
                            }}
                            validationSchema={loginSchema}
                            onSubmit={values => {
                              axios.post('http://localhost:5000/login', {
                                userName:values.userName,
                                email:values.userName,
                                phone:values.userName,
                                pass:values.thePassword,
                              })
                              .then(function (response) {
                                console.log(response.data.token);
                              })
                              .catch(function (error) {
                                console.log(error);
                              });
                              console.log(values);
                            }}
                          >
                            {({errors,touched})=>(
                            <Form>
                                <div className="form-group mb-3">
                                  <label htmlFor="userName" className="form-label">
                                    User name
                                  </label>
                                  <input name="userName" className={`form-control ${errors.userName ? "border-danger" : ""}`} style={{color:"#8D27AE", fontWeight:"700"}} type="text" placeholder="User name,E-mail or mobile number"/>
                                  {errors.userName && touched.userName ? (
                                      <div className="form-text text-danger">{errors.userName}</div>
                                  ) : null}
                              </div>
                        
                                <div className="form-group mb-3" >
                                  <label htmlFor="thePassword" className="form-label">
                                  Password
                                  </label>
                                  <span className={classes.passwordVisiblity}><i className={passShowState.iconClass} onClick={toggleShowPass}></i></span>
                                  <input name="thePassword" className={`form-control ${errors.thePassword ? "border-danger" : ""}`} style={{color:"#8D27AE", fontWeight:"700"}} type={passShowState.inputType} placeholder="password"/>
                                  {errors.thePassword && touched.thePassword ? (
                                      <div className="form-text text-danger">{errors.thePassword}</div>
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

export default LoginForm