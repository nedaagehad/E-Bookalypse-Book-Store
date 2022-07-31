import React from 'react'
import classes from './CategoryCard.module.css'

const CategoryCard = props => {
    return (
        <div className={`col-md-4 col-sm-12 col-xs-12`}>
            <div className={classes.Category_Card}>
                <div className={classes.Card_Overlay}>
                    <h2>{props.alt}</h2>
                </div>
                <img src={props.img} alt={props.alt}/>
            </div>
        </div>
  )
}

export default CategoryCard