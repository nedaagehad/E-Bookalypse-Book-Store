import React from 'react';

//CSS Module
import classes from './HomeSlider.module.css';

//Components
import Slider from './Slider';

function HomeSlider() {

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
          <h1>books in E-Bookalypse</h1>
          <p className={classes.heroDisc}>Enjoy a variety of international E-Books from different categories and different writers at a very competitive price.</p>
          <button className={classes.colBtn}>Go to Collection  &nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
        </div>
        <Slider />
      </div>
  )
}

export default HomeSlider