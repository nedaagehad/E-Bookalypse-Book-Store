import React from 'react'
import CheckoutHeader from '../../../components/CheckoutHeader/CheckoutHeader'
import CheckoutSummary from '../../../components/CheckoutSummary/CheckoutSummary'
function Checkout() {
    let data = [
        {
            bookPoster: "./uploads/books/book1.jpg",
            bookName: "Harry Potter and The Philosipher stone",
            bookAuther: "J.K Rowling",
            bookPrice:"25.5",
        },
        {
            bookPoster: "./uploads/books/book2.jpg",
            bookName: "Harry Potter and The Goblet of Fire",
            bookAuther: "J.K Rowling",
            bookPrice:"15.8",
        }]
  return (
      <div className='content'>
          <div className="container">
              <div className="row">
                  <CheckoutHeader data={data}/>
                    <CheckoutSummary subTotal="30.98" tax="2.25" Total="33.23"/>
              </div>
          </div>
    </div>
  )
}

export default Checkout