import React from 'react'
// import { useSelector } from 'react-redux';
import classes from './HomeSlider.module.css'
import Slider from './Slider';

function HomeSlider() {

  // const lang = useSelector((state) => state.lang.currentLang);

  return (
      <div className={classes.heroSection}>
        <div className={classes.overlay}>
          <div className={classes.hotPromotions}>
            <div className={classes.promo}>
              <p>HOT PROMO</p>
            </div>
            <p>Discount 60% Special World Book Day</p>
          </div>
          <h1>Find over 5K </h1>
          <h1>book in E-Bookalypse</h1>
          <p className={classes.heroDisc}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua et dolore magna aliqua. </p>
          <button className={classes.colBtn}>Go to Collection  &nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
        </div>
        <Slider />
      </div>
  )
}

export default HomeSlider