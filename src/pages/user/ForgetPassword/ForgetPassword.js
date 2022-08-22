import React, { lazy , Suspense }  from 'react'
import Preloader from '../../../components/Preloader/Preloader';
const ForgetForm = lazy(() => import('../../../components/ForgetForm/ForgetForm'));

const ForgetPassword = props => {
  return (
    <div className='content footer-position' style={{backgroundImage:"url(../../images/login.jpeg)",backgroundSize:"cover" , padding:"50px"}}>
        <Suspense fallback={<Preloader />}>
            <ForgetForm />
        </Suspense>
    </div>
  )
}

export default ForgetPassword