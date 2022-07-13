import React from 'react'

function PaymentPolicy() {
    return (
        <div className='container-fluid'>
            <div className='container m-5 p-4'>
                <h3>Payment Policy</h3>
                <p>
                    Credit card purchase security statement

                    Confidentiality of your information is protected and secured by using SSL encryption. Pages for web payment are secured by using Secure Socket Layer (SSL) protocol with 128-bit data encryption. SSL encryption is a data coding procedure for prevention of unauthorized access during data transfer.

                    This enables a secure data transfer and prevents unauthorized data access during communication between user and Monri WebPay Payment Gateway and vice versa. Monri WebPay Payment Gateway and financial institutions exchange data by using their virtual private network (VPN) which is also protected from unauthorized access. Monri Payments is PCI DSS Level 1 certified payment service provider.

                    Credit card numbers are not stored by Merchant and are not available to unauthorized personnel.

                    Payment Partners

                    Ordered products, with possible delivery costs, the costumer is able to pay on delivery through GLS express delivers, credit transfer (general payment slip or through internet banking) or credit and debit cards such as: MasterCard, Maestro, VISA, VISA Electron and American Express (through Monri system).
                </p>
            </div>
        </div>
    )
}

export default PaymentPolicy