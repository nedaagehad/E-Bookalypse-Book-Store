import React, { lazy , Suspense } from 'react'
import Preloader from '../../../components/Preloader/Preloader';
const LoginForm = lazy(() => import('../../../components/LoginForm/LoginForm') );
const Login = props => {
  return (
    <div className='content' style={{backgroundImage:"url(../../images/login.jpeg)",backgroundSize:"cover" , padding:"50px"}}>
      <Suspense fallback={<Preloader />}>
            <LoginForm />
        </Suspense>
    </div>
  )
}

export default Login