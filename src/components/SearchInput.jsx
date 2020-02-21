import React from 'react';

export default function ({ handleSearchInput, searchType, checked, handleTypeChange }) {
    return (
        <div className="search">
            <div>
                <label htmlFor="search-input" className="search-input-label">{searchType === "character" ? "Character Search:" : "Episode Search:"}</label>
                <input type="text" id="search-input" className="search-input" placeholder={searchType === "character" ? "e.g. 'Rick'" : "e.g. 'Pilot'"} spellCheck="false" onChange={handleSearchInput} />
            </div>
            <div className="search-checkbox">
                <label className="checkbox-label">
                    <input type="checkbox" checked={checked} onChange={handleTypeChange} />
                    <span>Search by Episode</span>
                </label>
            </div>
        </div>
    );
}