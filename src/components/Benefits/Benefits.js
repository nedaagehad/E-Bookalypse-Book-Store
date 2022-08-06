import React from 'react';
import styles from './Benefits.module.css';
import { FaClock } from 'react-icons/fa';
import { BsFillCreditCardFill, BsFillAwardFill, BsFillShieldFill, BsDashLg } from 'react-icons/bs'
import { useSelector } from 'react-redux';

function Benefits() {

    const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`${theme === "night" ? styles.categoriesHomeSectionNight : styles.categoriesHomeSection} container-fluid mb-5 pb-5`}>
          <div className={`${styles.row} row`}>
            <div className='col-lg-3'>
              <div className={styles.titleandtext}>
                <div className={styles.icon}>
                  <FaClock />
                </div>
                <div className={styles.textCatSection + " " + "pt-3"}>
                  <h4 className={`${styles.h4} pb-2 ${theme === "night" ? "text-light" : ""}`}>Quick Delivery</h4>
                  <p className={`${styles.p}`}>Lorem ispum dolor sit amat, onsttatelurr hllo ffr tj</p>
                </div>
              </div>
              
            </div>
            <div className='col-lg-3'>
            <div className={styles.titleandtext}>
                <div className={styles.icon}>
                  <BsFillCreditCardFill />
                </div>
                <div className={styles.textCatSection + " " + "pt-3"}>
                  <h4 className={`${styles.h4} pb-2 ${theme === "night" ? "text-light" : ""}`}>Secure Payment</h4>
                  <p className={`${styles.p}`}>Lorem ispum dolor sit amat, onsttatelurr hllo ffr tj</p>
                </div>
              </div>

            </div>
            <div className='col-lg-3'>
            <div className={styles.titleandtext}>
                <div className={styles.icon}>
                  <BsFillAwardFill />
                </div>
                <div className={styles.textCatSection + " " + "pt-3"}>
                  <h4 className={`${styles.h4} pb-2 ${theme === "night" ? "text-light" : ""}`}>Best Quality</h4>
                  <p className={`${styles.p}`}>Lorem ispum dolor sit amat, onsttatelurr hllo ffr tj</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
            <div className={styles.titleandtext}>
                <div className={styles.icon}>
                    <BsFillShieldFill />
                  </div>
                  <div className={styles.textCatSection + " " + "pt-3"}>
                    <h4 className={`${styles.h4} pb-2 ${theme === "night" ? "text-light" : ""}`} >Return Guarantee</h4>
                    <p className={`${styles.p}`}>Lorem ispum dolor sit amat, onsttatelurr hllo ffr tj</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
  )
}

export default Benefits