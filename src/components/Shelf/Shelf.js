import React from 'react'
import classes from './Shelf.module.css'

const Shelf = props => {
    return (
        <div className={`col-12`}>
            <div className={classes.shelfContainer}>
                <div className="row">
                    <div className={`col-lg-2 col-md-4 col-sm-4 ${classes.book}`}>
                        <img src="../../Images/Books/1.jpg"/>
                    </div>
                    <div className={`col-lg-2 col-md-4 col-sm-4 ${classes.book}`}>
                        <img src="../../Images/Books/1.jpg"/>
                    </div>
                    <div className={`col-lg-2 col-md-4 col-sm-4 ${classes.book}`}>
                        <img src="../../Images/Books/1.jpg"/>
                    </div>
                    <div className={`col-lg-2 col-md-4 col-sm-4 ${classes.book}`}>
                        <img src="../../Images/Books/1.jpg"/>
                    </div>
                    <div className={`col-lg-2 col-md-4 col-sm-4 ${classes.book}`}>
                        <img src="../../Images/Books/1.jpg"/>
                    </div>
                    <div className={`col-lg-2 col-md-4 col-sm-4 ${classes.book}`}>
                        <img src="../../Images/Books/1.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shelf;