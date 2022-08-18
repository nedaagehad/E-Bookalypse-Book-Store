import React,{useState,useEffect} from 'react'
import ViewCategoryPage from '../../../components/ViewCategoryPage/ViewCategoryPage'
import FilterBar from '../../../components/FilterBar/FilterBar'
import BooksView from '../../../components/BooksView/BooksView'
// <<<<<<< HEAD
// import { useSelector } from 'react-redux'
import { booksApi } from '../../../store/services';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// =======
import BookCard from '../../../components/BookCard/BookCard'
import Wishlist from '../Wishlist/Wishlist';
// >>>>>>> 064fd04123a5f582be55b3c12a9a48eb0b37d657

function Category() {
    const [books,setBooks]= useState();
    const [searchedBook ,setSearchedBook] = useState()
    const filterState = useSelector(state => state.filter)
    const dispatch  = useDispatch();
    const {data,isLoading,error}= booksApi.useGetAllBooksQuery(filterState)
    let params = useParams();
    let getSearchResults = booksApi.useGetSearchResultsQuery(filterState)
  const theme = useSelector((state) => state.theme.currentTheme);
  const getWishList = booksApi.useGetWishListQuery()
  const [wishList,setWishList] = useState()
  useEffect(() => {
    if(params.id){
        if(params.id.match(/^\d/) == null ){
            if(getSearchResults.data){

                setBooks(getSearchResults.data.data)
                console.log(getSearchResults.data.data)
            }

        }        

    }
    if(data){
        setBooks(data.data)
        // console.log(data.data)
    }

    if(getWishList.data){
      // console.log(getWishList.data.wishList.bookItems.filter((b)=> b._id == b.id))
      
      setWishList(getWishList.data.wishList)
    }
}, [data,getSearchResults.data,getWishList.data]);
    
  return (
    <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
         <ViewCategoryPage>
             <FilterBar />
            <div className="col-md-9 col-sm-12 mt-4">
                <div className="row">
                  <BooksView title="Books">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="row">
                                  {books ? books.map((b) => {
                                    if(wishList){

                                      let bookWished  = wishList.bookItems.filter((book)=> book._id === b._id)
                                    }
                                      return (
                                          
                                        <div key={b._id} className="col-lg-4 col-md-6 col-sm-12">
                                            <BookCard book={b}  fav={!wishList  ? false : wishList.bookItems.filter((book)=> book._id === b._id).length > 0 ?  true : false} img="../../Images/Books/1.jpg" alt={b.title} price="$15.50"/>
                                        </div>
                                      )
                                      
                                  }) : null}
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