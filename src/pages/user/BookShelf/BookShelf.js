import React,{ useEffect, useState } from 'react'
import Preloader from '../../../components/Preloader/Preloader'
import Shelf from  "../../../components/Shelf/Shelf"
import { booksApi } from '../../../store/services'
import BookEmpty from '../../../components/BookEmpty/BookEmpty'
const BookShelf = props => {
  const {data,isLoading,error} = booksApi.useGetUserBooksQuery()

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {

    if (isLoading) {
      setLoading(true);
    }
    else {
      if(data)
      {
        setLoading(false);
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [data]);

    return (
      <div className='content'>
        { isLoading ? <Preloader /> :

          <div className='container'>
            <div className='row'>
              {
                data.length < 1 ? <BookEmpty/> :
                <Shelf data={data} />
              }
            </div>
          </div>
        }
      </div>
    )
  }

export default BookShelf