import { Formik, Field ,Form } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react'
import { booksApi } from '../../store/services'
import styles from './EditUserProfile.module.css'
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../Firebase/firebaseImage';
import { Link } from 'react-router-dom';
function CatSidebar() {
    const [getUserByID,response] = booksApi.useGetUserByIDMutation();
    const [updateUser,uresponse] = booksApi.useUpdateUserMutation();
    const [updatePassword,upresponse] = booksApi.useUpdatePasswordMutation()
    const [user,setUser] = useState()
    const [userImage,setUserImage] = useState()
    const [currentImage,setCurrentImage] = useState()
    const [male,setMale] = useState(false)
    const [female,setfemale] = useState(false)

    let onFileChange = (e)=>{
        // console.log(e.target.files[0])
        setUserImage(e.target.files[0])
        
      }

    const SignUpSchema = Yup.object().shape({
        fName: Yup.string()
          .min(3,"too short")
          .max(20,"too long")
          .matches(/^[a-zA-z]+$/,"first name contains only letters")
          .required("required"),
      
        lName: Yup.string()
          .min(3,"too short")
          .max(20,"too long")
          .matches(/^[a-zA-z]+$/,"last name contains only letters")
          .required("required"),
      
        userName: Yup.string()
          .min(3,"too short")
          .max(20,"too long")
          .matches(/^[_a-zA-Z0-9]+$/,"user name is not valid remove any space or special character except _")
          .required("required"),
      
        email: Yup.string()
          .email("email is not valid")
          .required("email is required"),
      
        phone: Yup.string()
          .matches(/^010[0-9]{8}$|011[0-9]{8}$|012[0-9]{8}$|015[0-9]{8}$/,"number in not valid")
          .required("mobile number is required"),
      
        pass: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
        ,
        confirmPass: Yup.string()
          .required("field is required"),
       
        gender: Yup.string("must be string")
          .required("Gender is required"),
      
        date_birth: Yup.date()
          .max(new Date('01-01-2007'),"you are not allowed")
          .required("Birth date is required"),
      
        street: Yup.string()
          .min(3,"too short")
          .max(30,"too long")
          .required("Required"),
      
        city: Yup.string()
          .min(3,"too short")
          .max(30,"too long")
          .required("Required"),
      
        governorate: Yup.string()
          .min(3,"too short")
          .max(30,"too long")
          .required("Required")
      
      });


        return (
            <div className={`container my-5`}>
                <div className="row">
                    <div className={`col-lg-4`}>
                        {user ? 
                        <div className={`${styles.profileCard4} ${styles.zDepth3}`}>
                                    <div className="card">
                                        <div className={`${styles.cardBody} rounded-top ${styles.mov}`}>
            
                                            <div className={styles.userBox}>
                                                <img src={currentImage} alt="user avatar" />
                                            </div>
                                            <h5 className={`mb-1 text-lg-center text-white ${styles.wrong} ${styles.h5} `}>{user.fName+" "+user.lName} </h5>
                                            <h5 className={`text-light  text-lg-center ${styles.h5} ${styles.username}`}>@{user.userName}</h5>
                                        </div>
            
                                        <div className={styles.cardBody}>
            
                                            <ul className={`list-group shadow-none`}>
                                                <li className={`list-group-item ${styles.content}`}>
                                                    <div className={styles.listIcon}>
                                                        <i className="fa fa-phone-square"></i>
                                                    </div>
            
                                                    <div className={styles.listDetails}>
                                                        <span>{user.phone}</span>
                                                        <small>Mobile Number</small>
                                                    </div>
                                                </li>
                                                <li className={`list-group-item ${styles.content}`}>
                                                    <div className={styles.listicon}>
                                                        <i className="fa fa-envelope"></i>
                                                    </div>
                                                    <div className={styles.listDetails}>
                                                        <span>{user.email}</span>
                                                        <small>Email Address</small>
                                                    </div>
                                                </li>
                                                <li className={`list-group-item ${styles.content}`}>
                                                    <div className={styles.listicon}>
                                                        <i className="fa fa-globe"></i>
                                                    </div>
                                                    <div className={styles.listDetails}>
                                                        <span>{user.city}</span>
                                                        <small>city</small>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="row text-center mt-4">
                                                <div className="col p-2">
                                                    <h4 className="mb-1 line-height-5">40</h4>
                                                    <small className={`mb-0 font-weight-bold ${styles.mov2}`}>Books</small>
                                                </div>
                                                <div className="col p-2">
                                                    <h4 className="mb-1 line-height-5">10</h4>
                                                    <small className={`mb-0 font-weight-bold ${styles.mov2}`}>WishList</small>
                                                </div>
                                                <div className="col p-2">
                                                    <h4 className="mb-1 line-height-5">5</h4>
                                                    <small className={`mb-0 font-weight-bold ${styles.mov2}`}>Cart</small>
                                                </div>
                                            </div>
                                        </div>
            
                                    </div>
                        </div>
                        
                        :null}
                    </div>
    
                    <div className={`col-md-8 personal-info ps-lg-5`}>
                        {/* <div className='alert alert-info alert-dismissable'>
                            <a className='panel-close close' data-dismiss="alert">×</a>
                            <i className='fa fa-coffee' />
                            Your profile <strong>Updated </strong>successfully
                        </div> */}
                        <h3 className={styles.headertxt}>Edit Personal Information</h3>
                        <Formik 
                        initialValues = {
                            {
                                fName:"",
                                lName:"",
                                date_birth:"",
                                gender:"",
                                street:"",
                                city:"",
                                governorate:"",
                                userName:"",
                                email:"",
                                phone:"",
                                currentPass:"",
                                pass:"",
                                confirmPass:"",

                            }
                        }
                        validationSchema={SignUpSchema}
                        validate={(values)=>{
                            const errors = {};
                            if (values.confirmPass !== values.pass) {
                            errors.confirmPass = 'do not match';
                            }
                            return errors;
                            }}

                            onSubmit={values => {
                                const data = new FormData();
                                data.append('userImage',userImage)
                                data.append("fName",values.fName)
                                data.append("lName",values.lName)
                                data.append("date_birth",values.date_birth)
                                data.append("gender",values.gender)
                                data.append("street",values.street)
                                data.append("city",values.city)
                                data.append("governorate",values.governorate)
                                data.append("userName",values.userName)
                                data.append("email",values.email)
                                data.append("phone",values.phone)
                                if(user.image){
                                    data.append("oldIcon",user.image)
                                }
                                if(values.pass !== null && values.confirmPass !== null && values.currentPass !== null){
                                    data.append("newPass",values.pass)
                                    data.append("currentPass",values.currentPass)
                                    console.log(values.currentPass)
                                    console.log(values.pass)
                                    updatePassword({currentPass:values.currentPass,newPass:values.pass}).then((r)=>console.log(r)).catch((err)=>console.log(err))
                                    updateUser(data).then((r)=>console.log(r)).catch((e)=>console.log(e))                  
                                    
                                }else{

                                    updateUser(data).then((r)=>console.log(r)).catch((e)=>console.log(e))                  
                                }
                                console.log(values);
                            }}>
                            {({errors,touched,setFieldValue})=>
                            {
                              
                            useEffect(() => {
                                getUserByID().then((res)=>
                                    {            
                                        setUser(res.data)
                                        console.log(res.data)
                                        let user  = res.data
                                        Object.keys(user).forEach(key=>{
                                            // console.log(key)
                                            setFieldValue(key,user[key])
                                            if(key == "date_birth"){
                                                if(user.date_birth != undefined && user.date_birth != null){
                                                   const getDate = user.date_birth.split("T")[0]
                                                    // console.log(getDate)
                                                setFieldValue("date_birth",getDate)
                                                }
                                            }
                                            if(key == 'gender'){
                                                if(user.gender == "male"){
                                                   setMale(true)
                                                }else{
                                                    setfemale(true)
                                                }
                                            }
                                            if(key =='pass'){
                                                setFieldValue('pass','')
                                            }
                                            
                                        })

                                        // getting image from firebase
                                        if(user.image){
                                            const starsRef = ref(storage, 'uploads/users/'+user.image);
                                        
                                            getDownloadURL(starsRef)
                                            .then((url) => {
                                                setCurrentImage(url)
                                                // console.log(url)
                                            })
                                        
                                        }

                                    }        
                                ).catch((err) => console.log(err))
                                    
                            }, []);
                              
                              return(
                                <Form className='form-horizontal' role="form">
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>Profile Picture:</label>
                                        <div className="row align-items-center justify-content-between" >
                                        <div className='col-lg-6'>
                                            <Field  id="userImage" name="userImage" className={"form-control " } type="file" onChange={(e)=>onFileChange(e)} />
                                           
                                        </div>
                                        <div className="col-lg-6">
                                            {
                                            userImage ? 
                                            <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(userImage)}  />
                                            :
                                            
                                            
                                            <img src={currentImage}  width="50%" />
                                            
                                        
                                            
                                            }
                                        </div>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>First Name:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' name="fName"   id="fName" type="text" />
                                            {errors.fName && touched.fName ? (
                                                <div className="form-text text-danger">{errors.fName}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>Last Name:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' id="lName"   name="lName" type="text"  />
                                            {errors.lName && touched.lName ? (
                                                <div className="form-text text-danger">{errors.lName}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>Email:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' id="email" name="email"  type="email"  />
                                            {errors.email && touched.email ? (
                                                <div className="form-text text-danger">{errors.email}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>Phone:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' id="phone" name="phone"  type="text"  />
                                            {errors.phone && touched.phone ? (
                                                <div className="form-text text-danger">{errors.phone}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>Gender :</label>
                                        <div className='col-lg-9'>
                                        <div className='genders d-flex justify-content-evenly'>
                                            <div class="form-check">
                                       
                                            {male ? 
                                            
                                            <Field checked type="radio"   class="form-check-input" name="gender" id="gender" value="male" />
                                            
                                            :
                                            <Field  type="radio"   class="form-check-input" name="gender" id="gender" value="male" />

                                            }

                                            
                                            <label class="form-check-label" htmlFor="gender">
                                                Male
                                            </label>
                                            </div>
                                            <div class="form-check">
                                       
                                            {female ? 
                                            
                                            <Field  checked type="radio"  class="form-check-input"  value="female" name="gender" id="gender" />
                                            
                                            : 
                                            
                                            <Field type="radio"  class="form-check-input"  value="female" name="gender" id="gender" />
                                            }

                                            
                                            <label class="form-check-label" htmlFor="gender">
                                                Female
                                            </label>
                                            </div>
                                        </div>
                                            {errors.gender && touched.gender  ? (
                                                <div className="form-text text-danger">{errors.gender}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>Birth Date:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' id="date_birth"  name="date_birth" type="date"  />
                                            {errors.date_birth && touched.date_birth ? (
                                                <div className="form-text text-danger">{errors.date_birth}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>Old Password:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' id="currentPass"  name="currentPass" type="password"  />
                                            {errors.currentPass && touched.currentPass ? (
                                                <div className="form-text text-danger">{errors.currentPass}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>New Password:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' id="pass"  name="pass" type="password"  />
                                            {errors.pass && touched.pass ? (
                                                <div className="form-text text-danger">{errors.pass}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>Confirm Password:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' id="confirmPass"  name="confirmPass" type="password"  />
                                            {errors.confirmPass && touched.confirmPass ? (
                                                <div className="form-text text-danger">{errors.confirmPass}</div>
                                            ) : null }
                                        </div>
                                    </div>

                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>City:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' id="city"  name="city" type="text"  />
                                            {errors.city && touched.city ? (
                                                <div className="form-text text-danger">{errors.city}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>Governorate:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' id="governorate" name="governorate"type="text"  />
                                            {errors.governorate && touched.governorate ? (
                                                <div className="form-text text-danger">{errors.governorate}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className={`col-lg-3 ${styles.controlLabel}`}>street:</label>
                                        <div className='col-lg-9'>
                                            <Field className='form-control' id="street"  name="street" type="text"  />
                                            {errors.street && touched.street ? (
                                                <div className="form-text text-danger">{errors.street}</div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label className={`col-lg-3 ${styles.controlLabel}`}></label>
                                        <div className="col-lg-9">
                                            <input type="submit" className={`btn ${styles.saveBtn}`} value="Save Changes" />
                                            <Link to="/profile">

                                                <input type="button" className={`btn ${styles.cancelBtn}`} value="Cancel" />
                                            </Link>
                                        </div>
                                    </div>
                                </Form>
                              )
                                
                            }} 


                            </Formik>
                        {/* <form className='form-horizontal' role="form">
                          
    
                           
                            
    
                            <div class="form-group">
                                <label class={`col-lg-3 ${styles.controlLabel}`}>Change Profile</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="file" />
                                </div>
                            </div>
    
                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel}`}>Old Password:</label>
                                <div className='col-lg-9'>
                                    <input className='form-control' type="password" value="" />
                                </div>
                            </div>
    
                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel}`}>New Password:</label>
                                <div className='col-lg-9'>
                                    <input className='form-control' type="password" value="" />
                                </div>
                            </div>
    
                            <div className='form-group'>
                                <label className={`col-lg-3 ${styles.controlLabel}`}>Confirm New Password:</label>
                                <div className='col-lg-9'>
                                    <input className='form-control' type="password" value="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label className={`col-lg-3 ${styles.controlLabel}`}></label>
                                <div className="col-lg-9">
                                    <input type="button" className={`btn ${styles.saveBtn}`} value="Save Changes" />
                                    <input type="button" className={`btn ${styles.cancelBtn}`} value="Cancel" />
                                </div>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
    
        )
        
}

export default CatSidebar