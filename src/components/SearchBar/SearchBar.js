import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bookTitle } from '../../store/reducers/filterReducer/filterReducer';
import styles from './SearchBar.module.css';

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const HandleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    // eslint-disable-next-line
    const ClearSearch = () => {
        setSearchTerm("");
    }
    const Search = () => {
        if (searchTerm) {
            dispatch(bookTitle(searchTerm))
            navigate('/categories/category/' + searchTerm)
        }
    }

    return (
        <div className={styles.searchBar} >
            <input type='text' onChange={HandleSearch} value={searchTerm} placeholder='Type to search...' />
            <div className={styles.searchBtn} onClick={Search}>
                <BsSearch className={`w-100 h-100 ${styles.searchIcon}`} />
            </div>
        </div>
    )
}

export default SearchBar