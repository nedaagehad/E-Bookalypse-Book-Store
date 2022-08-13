import React from 'react'
import ViewCategoryPage from '../../../components/ViewCategoryPage/ViewCategoryPage'
import BooksView from '../../../components/BooksView/BooksView'
import BookCard from '../../../components/BookCard/BookCard'

function Wishlist() {
  return (
    <div className='content'>
           <ViewCategoryPage>
            <div className="col-md-12 col-sm-12">
                <div className="row">
                  <BooksView title="Wishlist">
                    <div className="col-md-12 col-sm-12">
                        <div className="row" style={{padding:"50px"}}>
                            <div className="col-lg-3 col-md-6 col-sm-12" style={{marginBottom:"20px"}}>
                                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-12" style={{marginBottom:"20px"}}>
                                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-12" style={{marginBottom:"20px"}}>
                                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-12" style={{marginBottom:"20px"}}>
                                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                                  </div>
                        </div>
                      </div>
                  </BooksView>
                </div>
             </div>
         </ViewCategoryPage>
    </div>
  )
}

export default Wishlist