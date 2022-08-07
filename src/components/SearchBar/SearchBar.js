import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import navbar from '../NavBar/NavBar.module.css';
import styles from './SearchBar.module.css';
 
function SearchBar() {

    const theme = useSelector((state) => state.theme.currentTheme);

    const [isExpanded, setIsExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    let navigate = useNavigate()
    
    const ExpandSearch = () => {
        setIsExpanded((s) => !s);
        if(searchTerm){

            console.log(searchTerm)
            navigate('/categories/category/'+searchTerm)
        }
    }

    const HandleSearch = (e) => {
        setSearchTerm(e.target.value);
        // console.log(searchTerm);
    }

    const ClearSearch = () => {
        setSearchTerm("");
    }

  return (

    // <div className={`${isExpanded ? `${styles.active} ${styles.searchBar}` : styles.searchBar} me-2`}> // Another Syntax
    <div className={`${styles.searchBar} ${isExpanded ? styles.active : ""} me-2`}>
        <input className={theme === "night" ? "bg-light" : "bg-white"} type='text' placeholder='Type to search...' onChange={HandleSearch} value={searchTerm} />
        <div className={styles.searchBtn} onClick={ExpandSearch}>
            <BsSearch className={theme === "night" && !isExpanded ? navbar.navIconNight : navbar.navIcon} />
        </div>
        <div className={styles.searchCancel} onClick={ClearSearch}>
            <GrClose className={navbar.navIcon} />
        </div>
    </div>
  )
}

export default SearchBar