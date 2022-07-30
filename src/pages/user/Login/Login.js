import React from 'react'
import LoginForm from '../../../components/LoginForm/LoginForm'

const Login = props => {
  return (
    <div className='content' style={{backgroundImage:"url(../../images/login.jpeg)",backgroundSize:"cover" , padding:"50px"}}>
         <LoginForm/>
    </div>
  )
}

export default Login