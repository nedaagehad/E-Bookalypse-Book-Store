import React, { useEffect, useState , lazy , Suspense  } from 'react';
import { booksApi } from '../../../store/services';
import { useSelector } from 'react-redux';

//Components
import Preloader from '../../../components/Preloader/Preloader';
import ViewCategoryPage from '../../../components/ViewCategoryPage/ViewCategoryPage';
import BooksView from '../../../components/BooksView/BooksView';
import BookCard from '../../../components/BookCard/BookCard';
import CollectionCard from '../../../components/CollectionCard/CollectionCard';

function Wishlist() {

  const theme = useSelector((state) => state.theme.currentTheme);

// <<<<<<< HEAD
//   const {data,isLoading,error} = booksApi.useGetWishListQuery();
//   const [wishlisted,setWishListed] = useState();
//   const [fav,setFav] = useState(true);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, error } = booksApi.useGetWishListQuery();
  const [wishlisted, setWishListed] = useState();
  const [fav, setFav] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
    else {
      if (data) {
        setWishListed(data.wishList)
        setLoading(false);
      }
  }}, [data]);

  return (
// <<<<<<< HEAD
    <div className={`content container-fluid ${theme === "night" ? "bg-dark" : ""}`}>
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
                    <div className="row" style={{ padding: "50px" }}>
                      {wishlisted ?
                        wishlisted.bookItems.map((book) => {

                          return (
                            <div key={book._id} className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: "20px" }}>
                              <BookCard fav={fav} book={book} />
                            </div>
                          )
                        }) : null
                      }
                      {
                        wishlisted ?
                          wishlisted.collectionItems.map((col) => {
                            return (
                              <div key={col._id} className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: "20px" }}>
                                <CollectionCard fav={fav} data={col} />
                              </div>
                            )
                          }) : null
                      }
                            
                                
                    </div>
                  </div>
                  </BooksView>
                  </Suspense>
              </div>
            </div>
          </ViewCategoryPage>
      }
{/* =======
    <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
      <ViewCategoryPage>
        <div className="col-md-12 col-sm-12 pt-5">
          <div className="row">
            <BooksView title="Wishlist">
              <div className="col-md-12 col-sm-12">
                <div className="row" style={{ padding: "50px" }}>
                  {wishlisted ?
                    wishlisted.bookItems.map((book) => {

                      return (
                        <div key={book._id} className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: "20px" }}>
                          <BookCard fav={fav} book={book} />
                        </div>
                      )
                    }) : null
                  }

                  {wishlisted ?
                    wishlisted.collectionItems.map((col) => {
                      return (
                        <div key={col._id} className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: "20px" }}>
                          <CollectionCard fav={fav} data={col} />
                        </div>
                      )
                    }) : null
                  }
                </div>
              </div>
            </BooksView>
          </div>
        </div>
      </ViewCategoryPage>
>>>>>>> nedaa */}
    </div>
  )
}

export default Wishlist