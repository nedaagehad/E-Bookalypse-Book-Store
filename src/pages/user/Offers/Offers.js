import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { booksApi } from '../../../store/services';

//Components
import PromoIntro from '../../../components/PromoIntro/PromoIntro';
import Combination from '../../../components/Combination/Combination';

function Offers() {

  const { data, isLoading, error } = booksApi.useGetAllCollectionsQuery();
  const [collections, setCollections] = useState();
  const [wishList, setWishList] = useState();

  const theme = useSelector((state) => state.theme.currentTheme);
  const getWishList = booksApi.useGetWishListQuery();

  useEffect(() => {
    if (data) {
      setCollections(data);
      console.log(data)
    }
    if (getWishList.data) {

      setWishList(getWishList.data.wishList)
    }
  }, [data, getWishList.data]);


  return (
    <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <PromoIntro percent="30%" promoName="Book Series" />
          </div>
          <div className="col-12">
            <div className="row">
              {collections ? collections.map((item) => {
                return (<Combination
                  key={item._id}
                  collectionID={item._id}
                  collectionName={item.title}
                  collectionPrice={item.collectionPrice}
                  collectionData={item.collectionBooks}
                  fav={!wishList ? false : wishList.collectionItems.filter((c) => c._id === item._id).length > 0 ? true : false}
                />)
              }) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers