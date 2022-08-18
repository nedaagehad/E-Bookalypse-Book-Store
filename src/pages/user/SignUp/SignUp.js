import React, { lazy , Suspense } from 'react'
import Preloader from '../../../components/Preloader/Preloader';
const SignUpForm = lazy(() => import('../../../components/SignUpForm/SignUpForm') );

const SignUp = props => {
  return (
    <div className='content' style={{backgroundImage:"url(../../images/login.jpeg)",backgroundSize:"cover" , padding:"50px"}}>
      <Suspense fallback={<Preloader />}>
            <SignUpForm />
        </Suspense>
    </div>
  )
}

export default SignUp