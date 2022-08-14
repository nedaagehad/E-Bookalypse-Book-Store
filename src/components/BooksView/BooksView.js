import React,{useEffect,useState} from 'react'
import classes from './BooksView.module.css'
// <<<<<<< HEAD
import BookCard from '../BookCard/BookCard'
import Pagination from '@mui/material/Pagination';
import { booksApi } from '../../store/services';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import styles from './BooksView.module.css'
// import Pagination from '@mui/material/Pagination';
// =======
// import Pagination from '@mui/material/Pagination'; 
// >>>>>>> 064fd04123a5f582be55b3c12a9a48eb0b37d657

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
// <<<<<<< HEAD
        <div className={`col-md-12 col-sm-12 ${styles.BookView}`}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={`row`}>
                    {props.children} 

{/* <<<<<<< HEAD */}
 {/* ======= */}
{/* ======= */}
{/* >>>>>>> 56b6db9b7d0fe21f37cedae967f8e4cd8ebbd259 */}
        {/* // <div className={classes.BookView}>
        //     <h2>{props.title}</h2>
        //     <div className={`row`}>
        //         {props.children} */}
{/* >>>>>>> 064fd04123a5f582be55b3c12a9a48eb0b37d657 */}
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