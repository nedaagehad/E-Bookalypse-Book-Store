import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import navbar from '../NavBar/NavBar.module.css';
 
function SearchBar() {

    const theme = useSelector((state) => state.theme.currentTheme);

    const [isExpanded, setIsExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const ExpandSearch = () => {
        setIsExpanded((s) => !s);
    }

    const HandleSearch = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }

    const ClearSearch = () => {
        setSearchTerm("");
    }

  return (
    <div className={`search-bar ${isExpanded ? "active" : ""} me-2`}>
        <input className={theme === "night" ? "bg-light" : "bg-white"} type='text' placeholder='Type to search...' onChange={HandleSearch} value={searchTerm} />
        <div className='search-btn' onClick={ExpandSearch}>
            <BsSearch className={theme === "night" && !isExpanded ? navbar.navIconNight : navbar.navIcon} />
        </div>
        <div className={`search-cancel`} onClick={ClearSearch}>
            <GrClose className={navbar.navIcon} />
        </div>
    </div>
  )
}

export default SearchBar