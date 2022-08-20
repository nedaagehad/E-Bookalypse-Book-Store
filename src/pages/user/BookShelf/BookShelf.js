import React,{ useEffect, useState } from 'react';
import Preloader from '../../../components/Preloader/Preloader'
import Shelf from  "../../../components/Shelf/Shelf"
import { booksApi } from '../../../store/services'
import BookEmpty from '../../../components/BookEmpty/BookEmpty'
import { useSelector } from 'react-redux';

const BookShelf = props => {

  // eslint-disable-next-line
  const {data,isLoading,error} = booksApi.useGetUserBooksQuery()
  
  const theme = useSelector((state) => state.theme.currentTheme);

  // eslint-disable-next-line
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
      <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
        { isLoading ? <Preloader /> :

          <div className='container'>
            <div className='row'>
              {
                data.length < 1 ? <BookEmpty title="Your Bookshelf is Empty"/> :
                <Shelf data={data} />
              }
            </div>
          </div>
        }
      </div>
    )
  }

export default BookShelf