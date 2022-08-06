import React,{useState,useEffect} from 'react'
import PromoIntro from '../../../components/PromoIntro/PromoIntro'
import Combination from '../../../components/Combination/Combination'
import { booksApi } from '../../../store/services';
function Promotions() {
  const {data,isLoading,error} = booksApi.useGetAllPromotionsQuery()
  const [promotions,setPormotions] = useState();

  useEffect(() => {
   if(data){
    setPormotions(data);
    console.log(data)
   }
  }, [data]);


  var arr = [
             {collection:
              {
                collectionName: "PotterHeads Gift",
                collectionPrice:"250",
                collectionData:{book1:{bookPoster:"./uploads/books/book1.jpg",bookName:"Harry Potter and the Chamber of Secrets"},book2:{bookPoster:"./uploads/books/book5.jpg",bookName:"Harry Potter and the Prisoner of Azkaban"},book3:{bookPoster:"./uploads/books/book4.jpg",bookName:"Harry Potter and the Order of the Phoenix"}},
              }
             },
             {collection:
              {
                collectionName: "Kids Night",
                collectionPrice:"130",
                collectionData:{book1:{bookPoster:"./uploads/books/book2.jpg",bookName:"The Friendly Needle"},book2:{bookPoster:"./uploads/books/book8.jpg",bookName:"Gulliver's Travel"},book3:{bookPoster:"./uploads/books/book3.jpg",bookName:"Tania Tells a Story"}},
              }
             },
             {collection:
              {
                collectionName: "Scary Nightmare",
                collectionPrice:"200",
                collectionData:{book1:{bookPoster:"./uploads/books/book6.jpg",bookName:"Zodiac Toy"},book2:{bookPoster:"./uploads/books/book9.jpg",bookName:"As Darkness Breaks"},book3:{bookPoster:"./uploads/books/book7.jpg",bookName:"White Worm"}},
              }
             },
            ];
  return (
    <div className="content">
        <div className="container">
            <div className="row">
                <div className="col-12">
                      <PromoIntro percent="30%" promoName="Book Series" />
                </div>
                <div className="col-12">
                    <div className="row">
                        {promotions ? promotions.map((item) => {
                          return (<Combination
                            key={item._id}
                            collectionName={item.title}
                            collectionPrice={item.collectionFinalPrice}
                            collectionData={item.books}
                          />)
                        }):null}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promotions