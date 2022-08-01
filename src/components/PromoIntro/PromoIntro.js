import React from 'react'
import classes from './PromoIntro.module.css'

const PromoIntro = props => {
    return (
            <div className={classes.promoIntro}>
                <div className={classes.PromoTitle}>
                <h1>Save <span>{props.percent} </span>when you buy <span>{props.promoName} </span>📚</h1>
                </div>
                <div className={classes.bookShelf}>
                    <div className={classes.shelfTitle}>
                        <h3>Buy More .. Save More !</h3>
                        <h6>Scroll to See Promotions</h6>
                    </div>
                </div>
            </div>
    )
}
export default PromoIntro;
