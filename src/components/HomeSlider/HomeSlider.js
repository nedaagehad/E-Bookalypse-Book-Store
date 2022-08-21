import React from 'react';
import { Link } from 'react-router-dom';

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
            <p>Discount 20% Celebrating our launch</p>
          </div>
          <h1>Find over 5K </h1>
          <h1>books in E-Bookalypse</h1>
          <p className={classes.heroDisc}>Enjoy a variety of international E-Books from different categories and different writers at a very competitive price.</p>
          <button className={classes.colBtn}><Link to='/offers' className='text-light'>Go to Collection  &nbsp;&nbsp;&nbsp;&nbsp;&gt;</Link></button>
        </div>
        <Slider />
      </div>
  )
}

export default HomeSlider