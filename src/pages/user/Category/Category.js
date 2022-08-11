import React from 'react'
import ViewCategoryPage from '../../../components/ViewCategoryPage/ViewCategoryPage'
import FilterBar from '../../../components/FilterBar/FilterBar'
import BooksView from '../../../components/BooksView/BooksView'
// <<<<<<< HEAD
import { useSelector } from 'react-redux'

// =======
import BookCard from '../../../components/BookCard/BookCard'
// >>>>>>> 064fd04123a5f582be55b3c12a9a48eb0b37d657

function Category() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
         <ViewCategoryPage>
             <FilterBar />
            <div className="col-md-9 col-sm-12">
                <div className="row">
                  <BooksView title="Books">
                    <div className="col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
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

export default Category