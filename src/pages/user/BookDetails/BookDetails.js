import React, { useEffect, useState } from 'react'
import BookDetailsContainer from "../../../components/BookDetailsContainer/BookDetailsContainer"
import CustomerReviews from "../../../components/CustomerReviews/CustomerReviews"
import RelatedToAuther from "../../../components/RelatedToAuther/RelatedToAuther"
import FlashSaleSlider from "../../../components/HomeSlider/FlashSaleSlider"
import { useParams } from 'react-router-dom'
import { booksApi } from '../../../store/services'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import storage from '../../../Firebase/firebaseImage'

function BookDetails() {
  let params = useParams();
  const [book,setBook] = useState()
  const {data,isLoading,error} = booksApi.useGetBookByIdQuery(params.id)
  const [image,setImage]= useState()

  useEffect(() => {
    if(data){
      console.log(data[0])
      setBook(data[0])
      
      const starsRef = ref(storage, `/uploads/books/poster/${data[0].poster}`);
      let imageurl = ' ';
       getDownloadURL(starsRef).then( (url)=>{
        const newUrl = url
     
        setImage(newUrl)
        
      }).catch((error) => {console.log(error)});
    }
  }, [data]);
  return (
    <div className='content'>
        <div className="container-fluid">
            <div className="row">
              {book ?  
                  
                
                  <>
                    <BookDetailsContainer 
                            rate={book.reviews}
                            reviewCount="5"
                            img={image}
                            alt={book.title}
                            bookName={book.title}
                            bookAuther={book.writer[0].name}
                            bookDesc={book.description}
                            bookPriceAfterPromo={book.price}
                            bookPriceBeforePromo="19.98"
                      />
                      {book.reviews.length > 0 ? 
                      
                        <CustomerReviews
                          rate="4.2"
                          rateDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                          fivePerc="80"
                          fourPerc="60"
                          threePerc="40"
                          twoPerc="20"
                          onePerc="10"
                          comments={[
                            {rate:"4.2",commenterImg:"",commenterName:"Reham Raafat",commentDate:"22 Jun, 2022",commentDesc:"My Favourite series forever !!"},
                            {rate:"4.1",commenterImg:"",commenterName:"Nedaa Gehad",commentDate:"15 Apr, 2021",commentDesc:"Amazing Book, I liked it"},
                            { rate: "3", commenterImg: "", commenterName: "Ranan Hosny", commentDate: "1 Feb, 2020", commentDesc: "I think it's good but not the best one, the other parts are wonderfull" },
                            { rate: "2", commenterImg: "", commenterName: "Hussin Alaa", commentDate: "2 Aug, 2020", commentDesc: "I don't like fictional books" },
                            {rate:"1",commenterImg:"",commenterName:"Eslam Mostafa",commentDate:"1 Jan, 2019",commentDesc:"I don't like reading"}
                          ]}
                        />
                      
                      :null}
                  
                  </>
              :null}
                <RelatedToAuther/>
                <FlashSaleSlider />
            </div>
         </div>
    </div>
  )
}

export default BookDetails