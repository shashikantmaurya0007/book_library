import React from 'react';
import { BsSearch } from 'react-icons/bs';

import "./header.css";

const Header = () => {
    const showSearchData = () => {
        
    };
  return (
    <div>
        <div className='header'>
            <div className='header-title'>
                <h2 className='txt'>Library</h2>
            </div>
            <div className='search-bar'>
                <div className='search-input'>
                    <input type='text' className='input-field' onChange={showSearchData} />
                    <div className='search-icon'>
                    <BsSearch />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header