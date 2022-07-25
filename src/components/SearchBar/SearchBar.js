import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

function SearchBar() {

    const [isExpanded, setIsExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const ExpandSearch = () => {
        // console.log("clicked" + isExpanded)
        setIsExpanded((s) => !s);
        // console.log(isExpanded);
    }

    const HandleSearch = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }

    const ClearSearch = () => {
        setSearchTerm("");
    }

  return (
    <div className={`search-bar ${isExpanded ? "active" : ""}`}>
        <input type='text' placeholder='Type to search...' onChange={HandleSearch} value={searchTerm} />
        <div className='search-btn' onClick={ExpandSearch}>
            <BsSearch />
        </div>
        <div className='search-cancel' onClick={ClearSearch}>
            <GrClose />
        </div>
    </div>
  )
}

export default SearchBar