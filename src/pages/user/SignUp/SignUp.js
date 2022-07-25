
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

const axios = require('axios');


function SignUp(props) {
 
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

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3,"too short")
    .max(20,"too long")
    .matches(/^[a-zA-z]+$/,"first name contains only letters")
    .required("required"),

  lastName: Yup.string()
    .min(3,"too short")
    .max(20,"too long")
    .matches(/^[a-zA-z]+$/,"last name contains only letters")
    .required("required"),

  userName: Yup.string()
    .min(3,"too short")
    .max(20,"too long")
    .matches(/^[_a-zA-Z0-9]+$/,"user name is not valid remove any space or special character except _")
    .required("required"),

  theEmail: Yup.string()
    .email("email is not valid")
    .required("email is required"),

  thePhone: Yup.string()
    .matches(/^010[0-9]{8}$|011[0-9]{8}$|012[0-9]{8}$|015[0-9]{8}$/,"number in not valid")
    .required("mobile number is required"),

  thePassword: Yup.string()
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
  .required("Password is required"),

  cnfrmPass: Yup.string()
    .required("field is required"),

  theGender: Yup.string()
    .required("Gender is required"),

  birthDate: Yup.date()
    .max(new Date('01-01-2007'),"you are not allowed")
    .required("Birth date is required"),

  theStreet: Yup.string()
    .min(3,"too short")
    .max(30,"too long")
    .required("Required"),

  theCity: Yup.string()
    .min(3,"too short")
    .max(30,"too long")
    .required("Required"),

  theGovernorate: Yup.string()
    .min(3,"too short")
    .max(30,"too long")
    .required("Required")

});


const [userImage, setUserImage] = useState();
let onFileChange = (e)=>{
  // console.log(e.target.files[0])
  setUserImage(e.target.files[0])
  
}


return (
    <div className="container">
      <Formik
        initialValues={{
              firstName:"",
              lastName:"",
              theEmail:"",
              thePhone:"",
              userName:"",
              thePassword:"",
              cnfrmPass:"",
              theGender:"",
              birthDate:"",
              theStreet:"",
              theCity:"",
              theGovernorate:""
        }}
        validationSchema={SignUpSchema}
        validate={(values)=>{
          const errors = {};
         if (values.cnfrmPass !== values.thePassword) {
           errors.cnfrmPass = 'do not match';
         }
         return errors;
        }}
        onSubmit={values => {
          const data = new FormData();
          data.append('userImage',userImage)
          // data.append('bookData',BookData)
          data.append("fName",values.firstName)
          data.append("lName",values.lastName)
          data.append("date_birth",values.birthDate)
          data.append("gender",values.theGender)
          data.append("street",values.theStreet)
          data.append("city",values.theCity)
          data.append("governorate",values.theGovernorate)
          data.append("userName",values.userName)
          data.append("email",values.theEmail)
          data.append("phone",values.thePhone)
          data.append("pass",values.thePassword)

          axios.post('http://localhost:5000/api/users/signUp', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          console.log(values);
        }}
      >
        {({errors,touched})=>(
        <Form>
          <div className="row">
            <div className="form-group mb-3 col-6">
                <label htmlFor="firstName" className="form-label">
                    first name
                </label>
                <Field name="firstName" className={`form-control ${errors.firstName ? "border-danger" : ""}`} type="text"/>
                {errors.firstName && touched.firstName ? (
                    <div className="form-text text-danger">{errors.firstName}</div>
                ) : null}
            </div>

            <div className="form-group mb-3 col-6">
                <label htmlFor="lastName" className="form-label">
                   Last name
                </label>
                <Field name="lastName" className={`form-control ${errors.lastName ? "border-danger" : ""}`} type="text"/>
                {errors.lastName && touched.lastName ? (
                    <div className="form-text text-danger">{errors.lastName}</div>
                ) : null}
            </div>

            <div className="form-group mb-3">
                <label htmlFor="userName" className="form-label">
                    User Name
                </label>
                <Field name="userName" className={`form-control ${errors.userName ? "border-danger" : ""}`} type="text"/>
                {errors.userName && touched.userName ? (
                    <div className="form-text text-danger">{errors.userName}</div>
                ) : null}
            </div> 

            <div className="form-group mb-3">
                <label htmlFor="theEmail" className="form-label">
                    Email
                </label>
                <Field name="theEmail" className={`form-control ${errors.theEmail ? "border-danger" : ""}`} type="email"/>
                {errors.theEmail && touched.theEmail ? (
                    <div className="form-text text-danger">{errors.theEmail}</div>
                ) : null}
            </div> 

             <div className="form-group mb-3">
                <label htmlFor="thePhone" className="form-label">
                    Mobile number
                </label>
                <Field name="thePhone" className={`form-control ${errors.thePhone ? "border-danger" : ""}`} type="text"/>
                {errors.thePhone && touched.thePhone ? (
                    <div className="form-text text-danger">{errors.thePhone}</div>
                ) : null}
            </div> 
    
            <div className="form-group mb-3" >
                <label htmlFor="thePassword" className="form-label">
                Password
                </label>
                <Field name="thePassword" className={`form-control ${errors.thePassword ? "border-danger" : ""}`} type={passShowState.inputType}/>
                <i className={passShowState.iconClass} onClick={toggleShowPass}></i>
                {errors.thePassword && touched.thePassword ? (
                    <div className="form-text text-danger">{errors.thePassword}</div>
                ) : null}
            </div>

            <div className="form-group mb-3">
                <label htmlFor="cnfrmPass" className="form-label">
                    Confirm Password
                </label>
                <Field name="cnfrmPass" className={`form-control ${errors.cnfrmPass ? "border-danger" : ""}`} type={passShowState.inputType}/>
                {errors.cnfrmPass && touched.cnfrmPass ? (
                    <div className="form-text text-danger">{errors.cnfrmPass}</div>
                ) : null}
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
              <label htmlFor="userImage" className="form-label ">user Image : </label>
              <input type="file" className='form-control' id="userImage" name="userImage" onChange={(e) => onFileChange(e)} />
            </div>
            <div className="form-group mb-3 col-6">
              <div id="theGender">Gender</div>
              <div role="group" aria-labelledby="theGender">
                <label>
                  <Field type="radio" name="theGender" value="male" />
                  <span className="mx-1">Male</span>
                </label>
                <label>
                  <Field type="radio" name="theGender" value="female" />
                  <span className="mx-1" >Female</span>
                </label>
                {errors.theGender && touched.theGender ? (
                    <div className="form-text text-danger">{errors.theGender}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group mb-3 col-6" >
                <label htmlFor="birthDate" className="form-label">
                Birth date
                </label>
                <Field name="birthDate" className={`form-control ${errors.birthDate ? "border-danger" : ""}`} type="date"/>
                {errors.birthDate && touched.birthDate ? (
                    <div className="form-text text-danger">{errors.birthDate}</div>
                ) : null}
            </div>

            <div className="form-group mb-3 col-4">
                <label htmlFor="theStreet" className="form-label">
                    Street
                </label>
                <Field name="theStreet" className={`form-control ${errors.theStreet ? "border-danger" : ""}`} type="text"/>
                {errors.theStreet && touched.theStreet ? (
                    <div className="form-text text-danger">{errors.theStreet}</div>
                ) : null}
            </div> 

            <div className="form-group mb-3 col-4">
                <label htmlFor="theCity" className="form-label">
                    City
                </label>
                <Field name="theCity" className={`form-control ${errors.theCity ? "border-danger" : ""}`} type="text"/>
                {errors.theCity && touched.theCity ? (
                    <div className="form-text text-danger">{errors.theCity}</div>
                ) : null}
            </div> 

            <div className="form-group mb-3 col-4">
                <label htmlFor="theGovernorate" className="form-label">
                    Governorate
                </label>
                <Field name="theGovernorate" className={`form-control ${errors.theGovernorate ? "border-danger" : ""}`} type="text"/>
                {errors.theGovernorate && touched.theGovernorate ? (
                    <div className="form-text text-danger">{errors.theGovernorate}</div>
                ) : null}
            </div> 
    
            <button type="submit" className="btn btn-primary" aria-describedby="submitverifyHelp">
            Register
            </button>
        </div>
        </Form>
        )}
      </Formik>
    </div>
)
}

export default SignUp