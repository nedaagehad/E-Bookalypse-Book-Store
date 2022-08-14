import React, { useEffect, useState } from 'react'
import ViewCategoryPage from '../../../components/ViewCategoryPage/ViewCategoryPage'
import BooksView from '../../../components/BooksView/BooksView'
import BookCard from '../../../components/BookCard/BookCard'
import { booksApi } from '../../../store/services'
import CollectionOnCard from '../../../components/BookOnCard/CollectionOnCard'

function Wishlist() {
  const {data,isLoading,error} = booksApi.useGetWishListQuery()
  const [wishlisted,setWishListed] = useState()
  useEffect(()=>{
    if(data){
      setWishListed(data.wishList)
    }
  },[data])
  const [fav,setFav] = useState(true)
  return (
    <div className='content'>
           <ViewCategoryPage>
            <div className="col-md-12 col-sm-12">
                <div className="row">
                
                  <BooksView title="Wishlist">
                    <div className="col-md-12 col-sm-12">
                        <div className="row" style={{padding:"50px"}}>
                        {
                          wishlisted ? 
                          
                          wishlisted.bookItems.map((book)=>{
                            return(
                              <div key={book._id} className="col-lg-3 col-md-6 col-sm-12" style={{marginBottom:"20px"}}>

                                <BookCard fav={fav} book={book}/>
                              </div>

                            )
                          })
                          
                          :null
                        }
                        {
                          wishlisted? 
                          wishlisted.collectionItems.map((col)=>{
                            return (
                            <div keu={col._id} className="col-lg-3 col-md-6 col-sm-12" style={{marginBottom:"20px"}}>
                                <CollectionOnCard  data={col} />
                                
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
    </div>
  )
}

export default Wishlist