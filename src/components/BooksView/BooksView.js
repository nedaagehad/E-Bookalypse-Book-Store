import React, { useEffect, useState } from 'react'
import { booksApi } from '../../store/services';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import styles from './BooksView.module.css'
import { decPage, page } from '../../store/reducers/filterReducer/filterReducer';

const BookView = props => {

    // eslint-disable-next-line
    const [books, setBooks] = useState();
    // eslint-disable-next-line
    const [searchedBook, setSearchedBook] = useState()
    const filterState = useSelector(state => state.filter)
    const dispatch = useDispatch();
    // eslint-disable-next-line
    const { data, isLoading, error } = booksApi.useGetAllBooksQuery(filterState)
    let params = useParams();
    let getSearchResults = booksApi.useGetSearchResultsQuery(filterState)
    const theme = useSelector((state) => state.theme.currentTheme);
    const [Page, setPage] = useState();
    const [lastPage,setLastPage] = useState(false)

    useEffect(() => {
        if (params.id) {
            if (params.id.match(/^\d/) == null) {
                if (getSearchResults.data) {

                    setSearchedBook(getSearchResults.data.data)
                }
            }
        }
        if (data) {
            setBooks(data.data)
            setPage(data.page)

        }
    }, [data, getSearchResults.data]);

    const nextPage = () => {
        if (data.data.length !== 0) {
            dispatch(page())

        }

        if (data.data.length === 0) {
            dispatch(decPage())
        }
    }
    const prevPage = () => {
        dispatch(decPage())
        
    }

    return (
        <div className={`col-md-12 col-sm-12 px-5 ${styles.BookView}`}>
            <h2 className={`${styles.title}`}>{props.title}</h2>
            <div className={`row`}>
                {props.children}
                <div className={`col-12`}>
                    <div className={styles.pagy}>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li class="page-item" style={{ color: "white" }}>
                                {/* eslint-disable-next-line */}
                                    <a class="page-link" onClick={() => { prevPage() }} aria-label="Previous" style={{ backgroundColor: "#8D27AE", color: "white", borderColor: "#8D27AE" }}>
                                        <button aria-hidden="true" style={{ color: "white", fontSize: "30px", padding: "0px" }}>&laquo;</button>
                                    </a>
                                </li>
                                {
                                    theme === 'night' ?
                                        <li className="page-item" style={{ color: "white", fontSize: "30px" }}>&nbsp;&nbsp;<span>{Page ? Page : null}</span>&nbsp;&nbsp;</li>
                                        :
                                        <li className="page-item" style={{ color: "#8D27AE", fontSize: "30px" }}>&nbsp;&nbsp;<span>{Page ? Page : null}</span>&nbsp;&nbsp;</li>
                                }

                                <li  className="page-item" style={lastPage ?{display:"none"}: null} >
                                {/* eslint-disable-next-line */}
                                    <a  className="page-link" onClick={() => { nextPage() }} aria-label="Next" style={{ backgroundColor: "#8D27AE", color: "white", borderColor: "#8D27AE" }}>
                                        <button aria-hidden="true" style={{ color: "white", fontSize: "30px", padding: "0px" }} >&raquo;</button>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookView;