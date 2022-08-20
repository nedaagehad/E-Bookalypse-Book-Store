import React, { useEffect, useState } from 'react'
import BookDetailsContainer from "../../../components/BookDetailsContainer/BookDetailsContainer"
import CustomerReviews from "../../../components/CustomerReviews/CustomerReviews"
import RelatedToAuther from "../../../components/RelatedToAuther/RelatedToAuther"
import UserReview from "../../../components/UserReview/UserReview"
import FlashSaleSlider from "../../../components/HomeSlider/FlashSaleSlider"
import { useParams } from 'react-router-dom'
import { booksApi } from '../../../store/services'
import { ref, getDownloadURL } from "firebase/storage";
import storage from '../../../Firebase/firebaseImage'
import { useSelector } from 'react-redux'
//loader 
import Preloader from '../../../components/Preloader/Preloader';

function BookDetails() {
  
  let params = useParams();
  const [book,setBook] = useState()
  const [price,setPrice] = useState()
  // eslint-disable-next-line
  const [discount,setDiscount] = useState()
  // eslint-disable-next-line
  const {data,isLoading,error} = booksApi.useGetBookByIdQuery(params.id)
  const [image,setImage]= useState()
  const theme = useSelector((state) => state.theme.currentTheme);
  const [loading, setLoading] = useState(false);
  const [getuserById] = booksApi.useGetUserByIDMutation()
  const [ user,setUser] = useState()
  const [ profileImg,setProfileImg] = useState()
  const getBookReviews = booksApi.useGetBookReviewsQuery(params.id)
  const [reviews,setReviews] = useState()
  useEffect(() => {
 
    if (isLoading || getBookReviews.isLoading) {
      setLoading(true);
    }
    else {
      if(data){

        getuserById().then((u)=>{
          
            setUser(u.data)
    
        })

        setBook(data[0])
        let promotions = data[0].promotion
        let finalPrice = data[0].price
       
        if(promotions.length > 0){
          setDiscount(promotions[0].discount_rate)
           finalPrice = data[0].price -  data[0].price * promotions[0].discount_rate
          }
          setPrice(finalPrice)
        const starsRef = ref(storage, `/uploads/books/poster/${data[0].poster}`);
        // eslint-disable-next-line
        let imageurl = ' ';
         getDownloadURL(starsRef).then( (url)=>{
          const newUrl = url
       
          setImage(newUrl)
          
        }).catch((error) => { console.log(error) });
        setLoading(false);
      }
      if(
        getBookReviews.data
      ){
        setLoading(false)
        setReviews(getBookReviews.data)
      }
    }
  }, [data,getBookReviews.data]);
  return (
    <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
      {loading ?
        <Preloader />
        :
        <div className="container-fluid">
          <div className="row">
            {book ?
                  
              <>
                <BookDetailsContainer
                  key={book._id}
                  id={book._id}
                  rate={book.reviews}
                  reviewCount="5"
                  img={image}
                  alt={book.title}
                  bookName={book.title}
                  bookAuther={book.writer[0].name}
                  bookDesc={book.description}
                  bookPriceAfterPromo={price}
                  bookPriceBeforePromo={book.price}
                  book={book}
                />
                  <UserReview comments={[
                    { commenterImg: "../userIcon.gif", commenterName: "Reham Raafat"}
                  ]}/> 
                  {console.log(reviews)}
                  {reviews ?
                      <>
                        <CustomerReviews
                          reviews={reviews}
                                
                          rate={book.rate.toFixed(1)}
                          rateDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                          fivePerc="80"
                          fourPerc="60"
                          threePerc="40"
                          twoPerc="20"
                          onePerc="10"
                          user={user ? user._id : null}
                          // userImage={profileImg}
                        />
                      </>
                  : null}
                 
                  <RelatedToAuther bookCategory={book.category[0].title} bookWriter={book.writer[0].name} />

                {/* {console.log(book.writer)} */}
              </>
              : null}
            <FlashSaleSlider />
          </div>
        </div>
      }
    </div>
  )
}

export default BookDetails