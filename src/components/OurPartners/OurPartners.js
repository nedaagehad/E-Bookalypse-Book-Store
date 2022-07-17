import React from 'react';
import iti from '../../assets/iti.png';
import aaib from '../../assets/aaib.png';
import { useSelector } from 'react-redux';

function OurPartners() {

  const theme = useSelector((state) => state.theme.currentTheme)

  return (
    <div className={`container-fluid border border-transparent ${theme === "night" ? "night" : ""}`}>
        <div className='row mb-3 align-items-center'>
            <h2 className={`col-4 col-lg-3 fw-bold text-center ${theme === "night" ? "partners-night" : ""}`}>Our Partners</h2>
            <img className='col-4' src={iti} alt='iti' />
            <img className='col-4' src={aaib} alt='aaib' />
        </div>
    </div>
  )
}

export default OurPartners