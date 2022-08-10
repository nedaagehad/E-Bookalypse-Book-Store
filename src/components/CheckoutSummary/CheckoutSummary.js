import React from 'react'
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = props => {
    return (
        <div className={`col-12 ${classes.checkoutCard}`}>
            <div className={`row`}>
                <div className={`col-md-7 col-sm-12 ${classes.summary}`}>
                    <h1>Checkout Summary 🚀</h1>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.</p>
                </div>
                <div className={`col-md-4 col-sm-12 ${classes.summaryDetails}`}>
                    <table>
                            {/* <tr>
                                <td>Subtotal</td>
                                <td>${props.subTotal}</td>
                            </tr> */}
                            {/* <tr>
                                <td>Tax</td>
                                <td>${props.tax}</td>
                            </tr> */}
                            <tbody>
                            <tr>
                                <td>Total</td>
                                <td>${props.Total}</td>
                            </tr>

                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default CheckoutSummary;