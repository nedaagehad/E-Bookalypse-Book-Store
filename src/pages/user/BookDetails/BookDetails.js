import React from 'react'
import BookDetailsContainer from "../../../components/BookDetailsContainer/BookDetailsContainer"
import CustomerReviews from "../../../components/CustomerReviews/CustomerReviews"
import RelatedToAuther from "../../../components/RelatedToAuther/RelatedToAuther"
import FlashSaleSlider from "../../../components/HomeSlider/FlashSaleSlider"
import { useSelector } from 'react-redux'

function BookDetails() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
        <div className="container-fluid">
            <div className="row">
          <BookDetailsContainer
                  rate="4.2"
                  reviewCount="5"
                  img="../../Images/Books/1.jpg"
                  alt="Harry Potter and the Sorcerer’s Stone"
                  bookName="Harry Potter and the Sorcerer’s Stone"
                  bookAuther="J. K. Rowling"
                  bookDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                  bookPriceAfterPromo="15,50"
                  bookPriceBeforePromo="19.98"
            />
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
                <RelatedToAuther/>
                <FlashSaleSlider />
            </div>
         </div>
    </div>
  )
}

export default BookDetails