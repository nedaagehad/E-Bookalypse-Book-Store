import React from 'react'

import { useSelector } from 'react-redux'

function PaymentPolicy() {

    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className={`container-fluid sticky-footer p-3 ${theme === "night" ? "bg-dark" : ""}`}>
            <div className='container p-5 rounded-5 shadow bg-light'>
                <h3 className='mb-3 text-decoration-underline fw-bold'>Payment Policy</h3>
                <p>
                    Credit card purchase security statement confidentiality of your information is protected and secured by using SSL encryption. Pages for web payment are secured by using Secure Socket
                    Layer (SSL) protocol with 128-bit data encryption. SSL encryption is a data coding procedure for prevention of unauthorized access during data transfer.
                </p>
                <p>
                    This enables a secure data transfer and prevents unauthorized data access during communication between user and Monri WebPay Payment Gateway and vice versa. Monri WebPay Payment Gateway
                    and financial institutions exchange data by using their virtual private network (VPN) which is also protected from unauthorized access. Monri Payments is PCI DSS Level 1 certified
                    payment service provider.
                </p>
                <p>
                    Credit card numbers are not stored by Merchant and are not available to unauthorized personnel.
                </p>
            </div>
        </div>
    )
}

export default PaymentPolicy