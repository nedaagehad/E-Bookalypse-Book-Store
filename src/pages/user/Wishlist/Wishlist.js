import React, { useEffect, useState, Suspense } from 'react';
import { booksApi } from '../../../store/services';
import { useSelector } from 'react-redux';

//Components
import Preloader from '../../../components/Preloader/Preloader';
import ViewCategoryPage from '../../../components/ViewCategoryPage/ViewCategoryPage';
import BooksView from '../../../components/BooksView/BooksView';
import BookCard from '../../../components/BookCard/BookCard';
import CollectionCard from '../../../components/CollectionCard/CollectionCard';
import WishlistEmpty from '../../../components/WishlistEmpty/WishlistEmpty';

function Wishlist() {

  const theme = useSelector((state) => state.theme.currentTheme);

  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetWishListQuery();
  const [wishlisted, setWishListed] = useState();
  // eslint-disable-next-line
  const [fav, setFav] = useState(true);
  const getBookShelf = booksApi.useGetUserBooksQuery()
  const [bookShelf,setBookShelf] = useState()
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
    else {
      if (data) {
        setWishListed(data.wishList)
        setLoading(false);
        console.log(data)
      }

      if(getBookShelf.data){
        setBookShelf(getBookShelf.data)
      }

  }}, [data,getBookShelf.data]);

  console.log(wishlisted)
  return (
    <div className={`content container-fluid ${theme === "night" ? "bg-dark" : "bg-white"}`}>
      {
        loading ?
          <Preloader />
          :
          <ViewCategoryPage>
            <div className="col-md-12 col-sm-12 pt-5">
              <div className="row">
              <Suspense fallback={<Preloader />}>
                <BooksView title="Wishlist">
                  <div className="col-md-12 col-sm-12">
                    <div className="row">
                      {wishlisted && wishlisted.bookItems.length === 0 && wishlisted.collectionItems.length === 0 ? 
                      
                          <div className="col-lg-12 col-md-12 col-sm-12">
                          <WishlistEmpty/>
                        </div>
                      :null}
                      {wishlisted && wishlisted.bookItems.length >0 ?
                        wishlisted.bookItems.map((book) => {

                          return (
                            <div key={book._id} className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: "20px" }}>
                              <BookCard   bookShelf={!bookShelf ? false : bookShelf.filter((bs)=>bs._id === book._id ).length > 0 ? true : false }  fav={fav} book={book} />
                            </div>
                          )
                        })  
                        : 
                       null
                      }
                      {
                        wishlisted ?
                          wishlisted.collectionItems.map((col) => {
                            return (
                              <div key={col._id} className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: "20px" }}>
                                <CollectionCard                     
                                bookShelf={!bookShelf ? false :  bookShelf.some((bs)=>!col.collectionBooks.some((c)=> c._id == bs._id)) ? true : false } 
                                 fav={fav} data={col} />
                              </div>
                            )
                          }) :  null
                      }         
                    </div>
                  </div>
                  </BooksView>
                  </Suspense>
              </div>
            </div>
          </ViewCategoryPage>
      }
    </div>
  )
}

export default Wishlist