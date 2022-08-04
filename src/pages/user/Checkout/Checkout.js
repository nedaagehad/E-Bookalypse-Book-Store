import React from 'react'
import CheckoutHeader from '../../../components/CheckoutHeader/CheckoutHeader'
import CheckoutSummary from '../../../components/CheckoutSummary/CheckoutSummary'
function Checkout() {
  return (
      <div className='content'>
          <div className="container">
              <div className="row">
                    <CheckoutHeader />
                    <CheckoutSummary/>
              </div>
          </div>
    </div>
  )
}

export default Checkout