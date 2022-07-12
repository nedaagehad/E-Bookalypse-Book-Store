import React from 'react';
import iti from '../../assets/iti.png';
import aaib from '../../assets/aaib.png';

function OurPartners() {
  return (
    <div className='container-fluid'>
        <div className='row mb-3 align-items-center'>
            <h2 className='col-4 col-lg-3 text-center'>Our Partners</h2>
            <img className='col-4' src={iti} alt='iti' />
            <img className='col-4' src={aaib} alt='aaib' />
        </div>
    </div>
  )
}

export default OurPartners