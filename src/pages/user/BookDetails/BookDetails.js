import React from 'react'
import BookDetailsContainer from "../../../components/BookDetailsContainer/BookDetailsContainer"
import CustomerReviews from "../../../components/CustomerReviews/CustomerReviews"
import RelatedToAuther from "../../../components/RelatedToAuther/RelatedToAuther"
import FlashSaleSlider from "../../../components/HomeSlider/FlashSaleSlider"
function BookDetails() {
  return (
    <div className='content'>
        <div className="container-fluid">
            <div className="row">
                <BookDetailsContainer/>
                <CustomerReviews/>
                <RelatedToAuther/>
                <FlashSaleSlider />
            </div>
         </div>
    </div>
  )
}

export default BookDetails