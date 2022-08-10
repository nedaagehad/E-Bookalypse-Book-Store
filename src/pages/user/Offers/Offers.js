import React,{useState,useEffect} from 'react'
import PromoIntro from '../../../components/PromoIntro/PromoIntro'
import Combination from '../../../components/Combination/Combination'
import { useSelector } from 'react-redux';

import { booksApi } from '../../../store/services';
function Offers() {
  const {data,isLoading,error} = booksApi.useGetAllCollectionsQuery()
  const [collections,setCollections] = useState();
  const theme = useSelector((state) => state.theme.currentTheme);

  useEffect(() => {
   if(data){
    setCollections(data);
    console.log(data)
   }
  }, [data]);


  return (
    <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
        <div className="container">
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
                          />)
                        }):null}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers