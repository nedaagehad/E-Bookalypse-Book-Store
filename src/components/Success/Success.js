import React from 'react'
import classes from './Success.module.css'
import { FaCheck } from 'react-icons/fa'

const Success = props => {
    return (
        <div className={`col-12`}>
            <div className={classes.successCard}>
                <div className={classes.cardHeader}>
                    <div className={classes.Icon}>
                        <p><FaCheck/></p>
                    </div>
                </div>
                <div className={classes.cardDesc}>
                    <h2>Great!</h2>
                    <h6>Checkout Completed Successfully</h6>
                    <div className={classes.action}>
                        <button>Go to Shelf</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Success;