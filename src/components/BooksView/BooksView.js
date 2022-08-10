import React,{useEffect,useState} from 'react'
import classes from './BooksView.module.css'
import BookCard from '../BookCard/BookCard'
import Pagination from '@mui/material/Pagination';
import { booksApi } from '../../store/services';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import styles from './BooksView.module.css'
// import Pagination from '@mui/material/Pagination';

const BookView = props =>{
    const [books,setBooks]= useState();
    const [searchedBook ,setSearchedBook] = useState()
    const filterState = useSelector(state => state.filter)
    const dispatch  = useDispatch();
    const {data,isLoading,error}= booksApi.useGetAllBooksQuery(filterState)
    let params = useParams();
    let getSearchResults = booksApi.useGetSearchResultsQuery(filterState)
    const theme = useSelector((state) => state.theme.currentTheme);

    useEffect(() => {
        if(params.id){
            if(params.id.match(/^\d/) == null ){
                if(getSearchResults.data){

                    setSearchedBook(getSearchResults.data.data)
                    // console.log(getSearchResults.data.data)
                }

            }        

        }
        if(data){
            setBooks(data.data)
            // console.log(data)
        }
    }, [data,getSearchResults.data]);
    return(
        <div className={`col-md-9 col-sm-12 ${styles.BookView}`}>
            <h2 className={styles.title}>Books</h2>
            <div className={`row`}>
               
                {
                    
                    searchedBook !== undefined ? 
                    searchedBook.map((book)=>{
                        return (
                            <BookCard key={book._id} book={book} img="../../Images/Books/1.jpg" alt={book.title} price="$15.50"/>
                            
                        )
                    })
                        
                    
                    :
                    books !== undefined ? 
                    books.map((book)=>{
                        return (
                            <BookCard key={book._id} book={book} img="../../Images/Books/1.jpg" alt={book.title} price="$15.50"/>
                            
                        )
                    })
                    
                    : null
                }


                <div className={`col-12`}>
                    <div className={styles.pagy}>
                        <Pagination count={5} color="secondary" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookView;