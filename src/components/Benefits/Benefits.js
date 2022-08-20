import React from 'react';
import { useSelector } from 'react-redux';

//CSS Module
import styles from './Benefits.module.css';

//Icons
import { FaClock } from 'react-icons/fa';
import { BsFillCreditCardFill, BsFillAwardFill, BsFillShieldFill } from 'react-icons/bs'

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
                <div className={`${styles.textCatSection} pt-3`}>
                  <h4 className={`${styles.h4} pb-2 ${theme === "night" ? "text-light" : ""}`}>Instant Access</h4>
                  <p className={styles.p}>Your books are only a click away. No need to wait for delivery. 
                  You can access your books directly after purchase.</p>
                </div>
              </div>
              
            </div>
            <div className='col-lg-3'>
            <div className={styles.titleandtext}>
                <div className={styles.icon}>
                  <BsFillCreditCardFill />
                </div>
                <div className={`${styles.textCatSection} pt-3`}>
                  <h4 className={`${styles.h4} pb-2 ${theme === "night" ? "text-light" : ""}`}>Secure Payment</h4>
                  <p className={`${styles.p}`}>We provide online and secure Payment. Your Payment Information is safe with us. It is never shared or published.</p>
                </div>
              </div>

            </div>
            <div className='col-lg-3'>
            <div className={styles.titleandtext}>
                <div className={styles.icon}>
                  <BsFillAwardFill />
                </div>
                <div className={`${styles.textCatSection} pt-3`}>
                  <h4 className={`${styles.h4} pb-2 ${theme === "night" ? "text-light" : ""}`}>Best Quality</h4>
                  <p className={`${styles.p}`}>We hand-pick books and writers to make sure you get the best reading experience you can.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
            <div className={styles.titleandtext}>
                <div className={styles.icon}>
                    <BsFillShieldFill />
                  </div>
                  <div className={`${styles.textCatSection} pt-3`}>
                    <h4 className={`${styles.h4} pb-2 ${theme === "night" ? "text-light" : ""}`} >Return Guarantee</h4>
                    <p className={`${styles.p}`}>If you discovered you got the wrong book after you order it, make use of our 48 hours return policy. </p>
                  </div>
                </div>
            </div>
          </div>
      </div>
  )
}

export default Benefits