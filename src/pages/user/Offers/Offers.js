import React from 'react'
import PromoIntro from '../../../components/PromoIntro/PromoIntro'
import Combination from '../../../components/Combination/Combination'
import { useSelector } from 'react-redux';

function Offers() {

  const theme = useSelector((state) => state.theme.currentTheme);

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
    <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                      <PromoIntro percent="30%" promoName="Book Series" />
                </div>
                <div className="col-12">
                    <div className="row">
                        {arr.map((item) => {
                          return (<Combination
                            collectionName={item.collection.collectionName}
                            collectionPrice={item.collection.collectionPrice}
                            collectionData={item.collection.collectionData}
                          />)
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers