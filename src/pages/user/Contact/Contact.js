import React, { lazy , Suspense }  from 'react'
import Preloader from '../../../components/Preloader/Preloader';
const Contact = lazy(()=>{
  return (
    <div className='container-fluid h-100 d-flex'>
      <Suspense fallback={<Preloader />}>
      <div className='flex-grow-1'>
        Contact
      </div>
      </Suspense>
    </div>
  )
})

export default Contact