import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const axios = require('axios');

const LoginForm = props => {

  const [passShowState,setPassShowState] = useState({
      isShown:false,
      inputType: "password",
      iconClass: "bi bi-eye" 
  })

  const toggleShowPass = () => {
      if (passShowState.isShown){
          setPassShowState({
              isShown:false,
              inputType: "password",
              iconClass: "bi bi-eye"    
          })  
      } else {
          setPassShowState({
              isShown:true,
              inputType: "text",
              iconClass: "bi bi-eye-slash"    
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
                <Field name="userName" className={`form-control ${errors.userName ? "border-danger" : ""}`} type="text" placeholder="User name,E-mail or mobile number"/>
                {errors.userName && touched.userName ? (
                    <div className="form-text text-danger">{errors.userName}</div>
                ) : null}
            </div>
      
              <div className="form-group mb-3" >
                <label htmlFor="thePassword" className="form-label">
                Password
                </label>
                <Field name="thePassword" className={`form-control ${errors.thePassword ? "border-danger" : ""}`} type={passShowState.inputType} placeholder="password"/>
                <i className={passShowState.iconClass} onClick={toggleShowPass}></i>
                {errors.thePassword && touched.thePassword ? (
                    <div className="form-text text-danger">{errors.thePassword}</div>
                ) : null}
            </div>
      
              <button type="submit" className="btn btn-primary">
              Submit
              </button>
          </Form>)}
          </Formik>
      </div>  
  )
}

export default LoginForm