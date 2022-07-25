import React from 'react';
import iti from '../../assets/iti.png';
import aaib from '../../assets/aaib.png';

import { useSelector } from 'react-redux';
import styles from './OurPartners.module.css';

function OurPartners() {

  const theme = useSelector((state) => state.theme.currentTheme)

  return (
    <div className={`container-fluid border border-transparent p-5 ${theme === "night" ? styles.night : ""}`}>
        <div className='row mb-3 align-items-center'>
            <h2 className='col-4 col-lg-3 fw-bold text-center'>Our Partners</h2>
            <a href='https://www.iti.gov.eg/iti/home' target='_blank' className='col-4'><img className={styles.partner} src={iti} alt='iti' /></a>
            <a href='https://www.aaib.com/' target='_blank' className='col-4'><img className={styles.partner} src={aaib} alt='aaib' /></a>
        </div>
    </div>
  )
}

export default OurPartners