import React from 'react';

import "./search-box.styles.scss";

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <div className="search-wrapper">
            <input type="search" placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
};