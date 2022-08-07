import React,{useEffect,useState} from 'react'
import classes from './BooksView.module.css'
import BookCard from '../BookCard/BookCard'
import Pagination from '@mui/material/Pagination';
import { booksApi } from '../../store/services';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


const BookView = props =>{
    const [books,setBooks]= useState();
    const [searchedBook ,setSearchedBook] = useState()
    const filterState = useSelector(state => state.filter)
    const dispatch  = useDispatch();
    const {data,isLoading,error}= booksApi.useGetAllBooksQuery(filterState)
    let params = useParams();
    let getSearchResults = booksApi.useGetSearchResultsQuery(filterState)

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
        <div className={`col-md-9 col-sm-12 ${classes.BookView}`}>
            <h2>Books</h2>
            <div className={`row`}>
               
                {
                    
                    searchedBook !== undefined ? 
                    searchedBook.map((book)=>{
                        return (
                            <BookCard key={book._id} book={book} img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                            
                        )
                    })
                        
                    
                    :
                    books !== undefined ? 
                    books.map((book)=>{
                        return (
                            <BookCard key={book._id} book={book} img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                            
                        )
                    })
                    
                    : null
                }
                {/* <BookCard img="../../Images/Books/2.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                <BookCard img="../../Images/Books/3.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                <BookCard img="../../Images/Books/4.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                <BookCard img="../../Images/Books/2.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/> */}
                <div className={`col-12`}>
                    <div className={classes.pagy}>
                        <Pagination count={5} color="secondary" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookView;