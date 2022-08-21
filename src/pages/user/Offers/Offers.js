import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { booksApi } from '../../../store/services';

//Components
import PromoIntro from '../../../components/PromoIntro/PromoIntro';
import Combination from '../../../components/Combination/Combination';

//loader 
import Preloader from '../../../components/Preloader/Preloader';

function Offers() {

  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetAllCollectionsQuery();
  const [collections, setCollections] = useState();
  const [wishList, setWishList] = useState();
  const [loading, setLoading] = useState(false);
  const theme = useSelector((state) => state.theme.currentTheme);
  const getWishList = booksApi.useGetWishListQuery();
  const getBookShelf = booksApi.useGetUserBooksQuery()
  const [bookShelf,setBookShelf] = useState()  

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
    else {
      if (data) {
        setCollections(data);
        setLoading(false);
      }
      if (getWishList.data) {
  
        setWishList(getWishList.data.wishList)
      }
      if(getBookShelf.data) {
        setBookShelf(getBookShelf.data)
      }
    }
  }, [data, getWishList.data,getBookShelf.data]);

  return (
    <div className={`content ${theme === "night" ? "bg-dark" : "bg-white"}`}>
      {loading ?
        <Preloader />
        :
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <PromoIntro percent="30%" promoName="Book Series" />
            </div>
            <div className="col-12">
              <div className="row">
                {collections ? collections.map((item) => {
                  console.log(bookShelf ? bookShelf[0] : null)
                  console.log(item.collectionBooks[0])
                  console.log(bookShelf ?  bookShelf.some((bs)=>!item.collectionBooks.some((c)=> c._id == bs._id)) : null)
                  // const res = origArr.filter(x => !newArr.some(y => y.value === x.value));
                  // result1.some(itemA =>
                  //   result2.some(itemB => itemB.name === itemA.name)
                  // )
                  return (<Combination
                    key={item._id}
                    collectionID={item._id}
                    collectionName={item.title}
                    collectionPrice={item.collectionPrice}
                    collectionData={item.collectionBooks}
                    fav={!wishList ? false : wishList.collectionItems.filter((c) => c._id === item._id).length > 0 ? true : false}
                    bookShelf={!bookShelf ? false :  bookShelf.some((bs)=>!item.collectionBooks.some((c)=> c._id == bs._id)) ? true : false } 
                  />)
                }) : null}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Offers