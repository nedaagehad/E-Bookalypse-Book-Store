import React, { lazy , Suspense } from 'react'
import { useSelector } from 'react-redux';
import Preloader from '../../../components/Preloader/Preloader';
// import LoginImage from '../../images/login.jpeg'
const LoginForm = lazy(() => import('../../../components/LoginForm/LoginForm') );
const Login = props => {
  const theme = useSelector((state)=>state.theme.currentTheme)
  return (
    <div className={`content  ${theme === 'night' ? 'bg-dark' : 'bg-light' }`} style={{backgroundSize:"cover" , padding:"50px"}}>
      <Suspense fallback={<Preloader />}>
            <LoginForm />
        </Suspense>
    </div>
  )
}

export default Login