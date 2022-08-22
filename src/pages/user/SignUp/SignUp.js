import React, { lazy , Suspense } from 'react'
import Preloader from '../../../components/Preloader/Preloader';
import { useSelector } from 'react-redux';

const SignUpForm = lazy(() => import('../../../components/SignUpForm/SignUpForm') );

const SignUp = props => {
  const theme = useSelector((state)=>state.theme.currentTheme)

  return (
    <div className={`content  ${theme === 'night' ? 'bg-dark' : 'bg-light' }`} style={{backgroundImage:"url(../../images/login.jpeg)",backgroundSize:"cover" , padding:"50px"}}>
      <Suspense fallback={<Preloader />}>
            <SignUpForm />
        </Suspense>
    </div>
  )
}

export default SignUp