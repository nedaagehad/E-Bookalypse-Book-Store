import React, { useState, useEffect } from 'react';
import { booksApi } from '../../../store/services';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import BookEmpty from '../../../components/BookEmpty/BookEmpty'

//Components
import ViewCategoryPage from '../../../components/ViewCategoryPage/ViewCategoryPage'
import FilterBar from '../../../components/FilterBar/FilterBar'
import BooksView from '../../../components/BooksView/BooksView'
import BookCard from '../../../components/BookCard/BookCard'

//loader 
import Preloader from '../../../components/Preloader/Preloader';


function Category() {

  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);
  const [searchedBook, setSearchedBook] = useState()
  const filterState = useSelector(state => state.filter)
  const dispatch = useDispatch();
  const { data, isLoading, error } = booksApi.useGetAllBooksQuery(filterState)
  let params = useParams();
  let getSearchResults = booksApi.useGetSearchResultsQuery(filterState)

  const theme = useSelector((state) => state.theme.currentTheme);
  const getWishList = booksApi.useGetWishListQuery();
  const [wishList, setWishList] = useState();


  useEffect(() => {
    // if(isLoading){
    //   setLoading(true);
    // }else{

    // }
    if (params.id) {
      if (params.id.match(/^\d/) == null) {
        if (getSearchResults.data) {
                console.log("here again")
                console.log(params.id)
                setBooks(getSearchResults.data.data)
                setLoading(false)
                console.log(getSearchResults.data.data)
                
              }

        }else if(data){
          setBooks(data.data)
          setLoading(false)
          // console.log(data.data)
      } 


    }

 

    if (getWishList.data) {
      setWishList(getWishList.data.wishList)
    }
  }, [data, getSearchResults.data,params.id, getWishList.data]);

  return (

    <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
{/* <<<<<<< HEAD */}
  {
    loading ?
      <Preloader />
      :
      <ViewCategoryPage>
        <FilterBar />
        <div className="col-md-9 col-sm-12 mt-4">
          <div className="row">
            <BooksView title="Books">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row">
                      { 
                      books.length > 0 ? books.map((b) => {
                        if (wishList) {

                          let bookWished = wishList.bookItems.filter((book) => book._id === b._id)
                        }
                        return (

                          <div key={b._id} className="col-lg-4 col-md-6 col-sm-12">
                            <BookCard book={b} fav={!wishList ? false : wishList.bookItems.filter((book) => book._id === b._id).length > 0 ? true : false} img="../../Images/Books/1.jpg" alt={b.title} price="$15.50" />
                          </div>
                        )

                        }) :
                        <div className="col-lg-12 col-md-12 col-sm-12">
                           <BookEmpty title="Category is Empty" />
                        </div>
                          
                    }
                </div>
              </div>
            </BooksView>
          </div>
        </div>
      </ViewCategoryPage>
  }
{/* // =======
//       <ViewCategoryPage>
//         <FilterBar />
//         <div className="col-md-9 col-sm-12 mt-4">
//           <div className="row">
//             <BooksView title="Books">
//               <div className="col-lg-12 col-md-12 col-sm-12">
//                 <div className="row">
//                   {books ? books.map((b) => {
//                     if (wishList) {
//                       let bookWished = wishList.bookItems.filter((book) => book._id === b._id)
//                     }
//                     return (
//                       <div key={b._id} className="col-lg-4 col-md-6 col-sm-12">
//                         <BookCard book={b} fav={!wishList ? false : wishList.bookItems.filter((book) => book._id === b._id).length > 0 ? true : false} img="../../Images/Books/1.jpg" alt={b.title} price="$15.50" />
//                       </div>
//                     )

//                   }) : null}
//                 </div>
//               </div>
//             </BooksView>
//           </div>
//         </div>
//       </ViewCategoryPage>
// >>>>>>> nedaa */}
    </div >
  )
}

export default Category;