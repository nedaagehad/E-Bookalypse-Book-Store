import React, { lazy , Suspense } from 'react'
import Preloader from '../../../components/Preloader/Preloader';
const NewPassForm = lazy(() => import('../../../components/NewPassForm/NewPassForm') );

const NewPassword = props => {
  return (
    <div className='content' style={{backgroundImage:"url(../../images/login.jpeg)",backgroundSize:"cover" , padding:"50px"}}>
      <Suspense fallback={<Preloader />}>
            <NewPassForm />
        </Suspense>
    </div>
  )
}

export default NewPassword