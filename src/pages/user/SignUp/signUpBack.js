import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

function SignUp(props) {
  const [registerData,setRegisterData] = useState({
    firstName:"",
    lastName:"",
    theEmail:"",
    thePhone:"",
    UsrName:"",
    thePassword:"",
    cnfrmPass:"",
    theGender:"",
    birthDate:"",
    theStreet:"",
    theCity:"",
    theGovernorate:""
})

// const [err,setErr] = useState({
//     firstNameError : "",
//     lastNameError : "",
//     theEmailError : "",
//     UsrNameError : "",
//     thePasswordError : "",
//     cnfrmPassError : "",
//     theGenderError:"",
//     submitverify:""
// })

const [passShowState,setPassShowState] = useState({
    isShown:false,
    inputType: "password",
    iconClass: "bi bi-eye" 
})


let handleChange = (e) => {
    setRegisterData({
        ...registerData,
        [e.target.id]: e.target.value
    });
    console.log(e.target.id,e.target.value)
    // handleValidation(e.target.id,e.target.value);
}



// const handleValidation = (field,val) => {
//     let regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.com$/,
//         regName = /^[a-zA-z]+$/,
//         regUsrName = /^[_a-zA-Z0-9]+$/,
//         regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

//     if(field == "firstName"){
//         setErr({
//             ...err,
//             firstNameError:
//                 val.length == 0?
//                 "This Field is required":
//                 !regName.test(val)?
//                 "First name shouldn't contain any numbres or other characters":
//                 ""
//         })
//     }else if(field == "lastName"){
//       setErr({
//         ...err,
//         lastNameError:
//             val.length == 0?
//             "This Field is required":
//             !regName.test(val)?
//             "Last name shouldn't contain any numbres or other characters":
//             ""
//     })
//     } else if (field == "theEmail"){
//         setErr({
//             ...err,
//             theEmailError:
//                 val.length == 0?
//                 "This Field is required":
//                 !regMail.test(val)?
//                 "This mail is not valid":
//                 ""
//         })
//     } else if (field == "UsrName"){
//         setErr({
//             ...err,
//             UsrNameError:
//                 val.length == 0?
//                 "This Field is required":
//                 !regUsrName.test(val)?
//                 "user name is not valid remove any space or special character except _":
//                 ""
//         })
//     } else if (field == "thePassword"){
//         setErr({
//             ...err,
//             thePasswordError:
//                 val.length == 0?
//                 "This Field is required":
//                 !regPassword.test(val)?
//                 "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character":
//                 ""
//         })
//     } else if (field == "cnfrmPass"){
//         setErr({
//             ...err,
//             cnfrmPassError:
//                 val.length == 0?
//                 "please reenter you pass":
//                 val !== registerData.thePassword?
//                 "pass don't match":
//                 ""
//         })
//     } else if(field == "theGender"){
//       setErr({
//         ...err,
//         theGenderError:
//           val.length == 0? "gender is required": ""
//       })
//     }
// }

let handlesubmit = (e) => {
    e.preventDefault();
    // if (err.firstNameError != "" || err.lastNameError != "" || err.theEmailError != ""||  err.UsrNameError != "" || err.thePasswordError != "" || err.cnfrmPassError != "" || err.theGenderError !=""){
    //     alert ("can't submit");
    // } else {
    //     setRegisterData({
    //         firstName:"",
    //         lastName:"",
    //         theEmail:"",
    //         UsrName:"",
    //         thePassword:"",
    //         cnfrmPass:"",
    //         theGender:""
    //     });
    //     setErr({
    //         ...err,
    //         submitverify: "you have registered"
    //     });
    // }

    setRegisterData({
              firstName:"",
              lastName:"",
              theEmail:"",
              thePhone:"",
              UsrName:"",
              thePassword:"",
              cnfrmPass:"",
              theGender:"",
              theStreet:"",
              theCity:"",
              theGovernorate:""
            })
    
}

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


return (
    <div className="container">
        <form onSubmit={handlesubmit} className="row">
            <div className="mb-3 col-6">
                <label htmlFor="firstName" className="form-label">
                    fist name
                </label>
                <input
                    type="text"
                    className={`form-control`}
                    id="firstName"
                    aria-describedby="firstNameHelp"
                    value={registerData.firstName}
                    onChange={handleChange}
                />
                {/* {err.firstNameError &&<div id="firstNameHelp" data-testid="firstNameHelp" className="form-text text-danger">
                    {err.firstNameError}
                </div>} */}
            </div>

            <div className="mb-3 col-6">
                <label htmlFor="lastName" className="form-label">
                   Last name
                </label>
                <input
                    type="text"
                    className={`form-control`}
                    id="lastName"
                    aria-describedby="lastNameHelp"
                    value={registerData.lastName}
                    onChange={handleChange}
                />
                {/* {err.lastNameError &&<div id="lastNameHelp" data-testid="lastNameHelp" className="form-text text-danger">
                    {err.lastNameError}
                </div>} */}
            </div>

            <div className="mb-3">
                <label htmlFor="UsrName" className="form-label">
                    User Name
                </label>
                <input
                    type="text"
                    className={`form-control `}
                    id="UsrName"
                    aria-describedby="UsrNameHelp"
                    value={registerData.UsrName}
                    onChange={handleChange}
                />
                {/* {err.UsrNameError && <div id="UsrNameHelp" data-testid="UsrNameHelp" className="form-text text-danger">
                    {err.UsrNameError}
                </div>} */}
            </div> 

            <div className="mb-3">
                <label htmlFor="theEmail" className="form-label">
                    Email
                </label>
                <input
                    type="text"
                    className={`form-control `}
                    id="theEmail"
                    aria-describedby="theEmailHelp"
                    value={registerData.theEmail}
                    onChange={handleChange}
                />
                {/* {err.theEmailError && <div id="theEmailHelp" data-testid="theEmailHelp" className="form-text text-danger">
                    {err.theEmailError}
                </div>} */}
            </div> 

             <div className="mb-3">
                <label htmlFor="thePhone" className="form-label">
                    Mobile number
                </label>
                <input
                    type="text"
                    className={`form-control `}
                    id="thePhone"
                    aria-describedby="thePhoneHelp"
                    value={registerData.thePhone}
                    onChange={handleChange}
                />
                {/* {err.theEmailError && <div id="theEmailHelp" data-testid="theEmailHelp" className="form-text text-danger">
                    {err.theEmailError}
                </div>} */}
            </div> 
    
            <div className="mb-3" >
                <label htmlFor="thePassword" className="form-label">
                Password
                </label>
                <input 
                    type= {passShowState.inputType}
                    className= {`form-control `}
                    id = "thePassword"
                    aria-describedby="thePasswordHelp"
                    value={registerData.thePassword}
                    onChange = {handleChange}
                />

                <i className={passShowState.iconClass} onClick={toggleShowPass}></i>
            
                {/* {err.thePasswordError && <div id="thePasswordHelp" data-testid="thePasswordHelp" className="form-text text-danger">
                    {err.thePasswordError}
                </div>} */}
            </div>

            <div className="mb-3">
                <label htmlFor="cnfrmPass" className="form-label">
                    Confirm Password
                </label>
                <input
                    type= {passShowState.inputType}
                    className={`form-control `}
                    id="cnfrmPass"
                    aria-describedby="cnfrmPassHelp"
                    value={registerData.cnfrmPass}
                    onChange={handleChange}
                />

                {/* {err.cnfrmPassError&&<div id="cnfrmPassHelp" data-testid="cnfrmPassHelp" className="form-text text-danger">
                    {err.cnfrmPassError}
                </div>} */}

                {/* {err.submitverify&&<div id="submitverifyHelp" className="form-text text-Success" >
                    {err.submitverify}
                </div>} */}
            </div>

            <div className="mb-3 col-6">
                <label htmlFor="theGender" className="form-label me-2">
                    Gender
                </label>
                <input
                  type="radio"
                  className=""
                  name="theGender"
                  id="theGender"
                  aria-describedby="theGenderHelp"
                  value="male"
                  checked={registerData.theGender === "male"}
                  onChange={handleChange}
                /> <span className="me-2">Male</span>
                <input
                  type="radio"
                  className=""
                  name="theGender"
                  id="theGender"
                  aria-describedby="theGenderHelp"
                  value="female"
                  checked={registerData.theGender === "female"}
                  onChange={handleChange}
                /> <span>Female</span>
                {/* {err.theGenderError &&<div id="theGenderHelp" data-testid="theGenderHelp" className="form-text text-danger">
                    {err.theGenderError}
                </div>} */}
            </div>

            <div className="mb-3 col-6" >
                <label htmlFor="birthDate" className="form-label">
                Birth date
                </label>
                <input 
                    type= "date"
                    className= {`form-control `}
                    id = "birthDate"
                    aria-describedby="birthDateHelp"
                    value={registerData.birthDate}
                    onChange = {handleChange}
                />
            
                {/* {err.thePasswordError && <div id="thePasswordHelp" data-testid="thePasswordHelp" className="form-text text-danger">
                    {err.thePasswordError}
                </div>} */}
            </div>

            <div className="mb-3 col-4">
                <label htmlFor="theStreet" className="form-label">
                    Street
                </label>
                <input
                    type="text"
                    className={`form-control `}
                    id="theStreet"
                    aria-describedby="theStreetHelp"
                    value={registerData.theStreet}
                    onChange={handleChange}
                />
                {/* {err.theEmailError && <div id="theEmailHelp" data-testid="theEmailHelp" className="form-text text-danger">
                    {err.theEmailError}
                </div>} */}
            </div> 

            <div className="mb-3 col-4">
                <label htmlFor="theCity" className="form-label">
                    City
                </label>
                <input
                    type="text"
                    className={`form-control `}
                    id="theCity"
                    aria-describedby="theCityHelp"
                    value={registerData.theCity}
                    onChange={handleChange}
                />
                {/* {err.theEmailError && <div id="theEmailHelp" data-testid="theEmailHelp" className="form-text text-danger">
                    {err.theEmailError}
                </div>} */}
            </div> 

            <div className="mb-3 col-4">
                <label htmlFor="theGovernorate" className="form-label">
                    Governorate
                </label>
                <input
                    type="text"
                    className={`form-control `}
                    id="theGovernorate"
                    aria-describedby="theGovernorateHelp"
                    value={registerData.theGovernorate}
                    onChange={handleChange}
                />
                {/* {err.theEmailError && <div id="theEmailHelp" data-testid="theEmailHelp" className="form-text text-danger">
                    {err.theEmailError}
                </div>} */}
            </div> 
    
            <button type="submit" className="btn btn-primary" aria-describedby="submitverifyHelp">
            Register
            </button>

        </form>
    </div>
)
}

export default SignUp