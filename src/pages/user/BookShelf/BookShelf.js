import React from 'react'
import Preloader from '../../../components/Preloader/Preloader'
import Shelf from  "../../../components/Shelf/Shelf"
import { booksApi } from '../../../store/services'
const BookShelf = props => {
  const {data,isLoading,error} = booksApi.useGetUserBooksQuery()

  if(isLoading){
    return(
      <Preloader />
      
    )
  }else{

    return (
      
      <div className='content'>
           <div className='container'>
                <div className='row'>
                    <Shelf data={data}/>
                </div>
           </div>
      </div>
    )
  }
}

export default BookShelf