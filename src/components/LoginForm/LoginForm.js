import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classes from './LoginForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setCredntials } from "../../store/reducers/authReducer/authReducer";
import { useNavigate, Link } from "react-router-dom";
import { booksApi } from "../../store/services";

const LoginForm = props => {

  let navigate = useNavigate();

  const theme = useSelector((state) => state.theme.currentTheme);

  const [passShowState, setPassShowState] = useState({
    isShown: false,
    inputType: "password",
    iconClass: "bi bi-eye-slash"
  })

  const authState = useSelector(state => state.auth.userRole)
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [login, loginresponse] = booksApi.useLoginMutation();

  useEffect(() => {
    if (authState === 'regUser') {
      navigate('/')

    } else if (authState === 'rootAdmin') {
      navigate('/admin')
    }
  }, [authState]);

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

    thePassword: Yup.string()
      .required("Password is required"),

  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={theme === "night" ? classes.formNight : classes.form}>
            <h2>Login</h2>
            <Formik
              initialValues={{
                userName: "",
                thePassword: ""
              }}
              validationSchema={loginSchema}
              onSubmit={values => {
                const data = {

                  userName: values.userName,
                  email: values.userName,
                  phone: values.userName,
                  pass: values.thePassword,
                }

                login(data)
                  .then(function (response) {
                    dispatch(setCredntials(response.data));
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-group mb-3">
                    <label htmlFor="userName" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                      Username
                    </label>
                    <Field name="userName" className={`form-control ${errors.userName ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type="text" placeholder="User name,E-mail or mobile number" />
                    {errors.userName && touched.userName ? (
                      <div className="form-text text-danger">{errors.userName}</div>
                    ) : null}
                  </div>

                  <div className="form-group mb-3" >
                    <label htmlFor="thePassword" className={`form-label ${theme === "night" ? classes.lightTxt : ""}`}>
                      Password
                    </label>
                    <span className={classes.passwordVisiblity}><i className={passShowState.iconClass} onClick={toggleShowPass}></i></span>
                    <Field name="thePassword" className={`form-control ${errors.thePassword ? "border-danger" : ""}`} style={{ color: "#8D27AE", fontWeight: "700" }} type={passShowState.inputType} placeholder="password" />
                    {errors.thePassword && touched.thePassword ? (
                      <div className="form-text text-danger">{errors.thePassword}</div>
                    ) : null}
                  </div>

                  <div className="form-group mb-3" >
                    <Link to="/ForgetPassword" classes={classes.forget}>Forget Password</Link>
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