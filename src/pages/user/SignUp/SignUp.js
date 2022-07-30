import React from 'react'
import SignUpForm from '../../../components/SignUpForm/SignUpForm'

const SignUp = props => {
  return (
    <div className='content' style={{backgroundImage:"url(../../images/login.jpeg)",backgroundSize:"cover" , padding:"50px"}}>
         <SignUpForm/>
    </div>
  )
}

export default SignUp