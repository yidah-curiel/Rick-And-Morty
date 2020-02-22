import React from 'react';

export default function ({ handleSearchInput, searchType }) {
    const SearchType = searchType.charAt(0).toUpperCase() + searchType.slice(1)
    function renderPlaceholder (){
        switch(searchType) {
            case "character":
                return ("e.g. 'Rick'")
            case "episode":
                return ("e.g. 'Pilot'")
            default:
                return ("e.g. 'Earth'")
          }
    }

    return (
        <div className="search">
            <div>
                <label htmlFor="search-input" className="search-input-label">{`${SearchType} Search`}</label>
                <input type="text" id="search-input" className="search-input" placeholder={renderPlaceholder()} spellCheck="false" onChange={handleSearchInput} />
            </div>
        </div>
    );
}