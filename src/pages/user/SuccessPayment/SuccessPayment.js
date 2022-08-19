import React, { lazy , Suspense } from 'react'
import Preloader from '../../../components/Preloader/Preloader';
const Success = lazy(() => import('../../../components/Success/Success') );

const SuccessPayment = props => {
  return (
    <div className='content pt-5'>
       <Suspense fallback={<Preloader />}>
             <Success/>
        </Suspense>
    </div>
  )
}

export default SuccessPayment