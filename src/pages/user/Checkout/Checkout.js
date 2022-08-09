import React from 'react'
import CheckoutHeader from '../../../components/CheckoutHeader/CheckoutHeader'
import CheckoutSummary from '../../../components/CheckoutSummary/CheckoutSummary'
import Sample1 from '../../../assets/1.jpg'
import Sample2 from '../../../assets/4.jpg'
import { useSelector } from 'react-redux'

function Checkout() {

    const theme = useSelector((state) => state.theme.currentTheme);

    let data = [
        {
            // bookPoster: "./uploads/books/book1.jpg",
            bookPoster: Sample1,
            bookName: "Harry Potter and The Philosipher stone",
            bookAuther: "J.K Rowling",
            bookPrice:"25.5",
        },
        {
            // bookPoster: "./uploads/books/book2.jpg",
            bookPoster: Sample2,
            bookName: "Harry Potter and The Goblet of Fire",
            bookAuther: "J.K Rowling",
            bookPrice:"15.8",
        }]
  return (
      <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
          <div className="container">
              <div className="row pt-3">
                  <CheckoutHeader data={data}/>
                    <CheckoutSummary subTotal="30.98" tax="2.25" Total="33.23"/>
              </div>
          </div>
    </div>
  )
}

export default Checkout