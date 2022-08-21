import React from 'react';
import iti from '../../assets/ITI_Light.png';
import aaib from '../../assets/AAIB_Light.png';
import itiDark from '../../assets/ITI_Dark.png';
import aaibDark from '../../assets/AAIB_Dark.png';

import { useSelector } from 'react-redux';
import styles from './OurPartners.module.css';

function OurPartners() {

  const theme = useSelector((state) => state.theme.currentTheme)

  return (
    <div className={`container-fluid p-5 ${theme === "night" ? styles.partnersBGNight : styles.partnersBG}`}>
        <div className={`row mb-3 align-items-center`}>
            <h2 className={`col-4 col-md-3 fw-bold text-center ${theme === "night" ? "text-light" : ""}`}>Our Partners</h2>
            {/* eslint-disable-next-line */}
            <a href='https://www.iti.gov.eg/iti/home' target='_blank' className='col-4'><img className={styles.partner} src={theme === "night" ? itiDark : iti} alt='iti' /></a>
            {/* eslint-disable-next-line */}
            <a href='https://www.aaib.com/' target='_blank' className='col-4'><img className={styles.partner} src={theme === "night" ? aaibDark : aaib} alt='aaib' /></a>
        </div>
    </div>
  )
}

export default OurPartners