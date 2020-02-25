import React from 'react';
import Filters from '../utils/Filters';
import NavLinks from '../utils/NavLinks';

function SearchInput({ handleSearchInput, handleSearchFilter, searchType, history }) {
    const SearchType = searchType.charAt(0).toUpperCase() + searchType.slice(1)

    function renderPlaceholder() {
        switch (searchType) {
            case "character":
                return ("e.g. 'Scary Terry'")
            case "episode":
                return ("e.g. 'Get Schwifty'")
            default:
                return ("e.g. 'Citadel of Ricks'")
        }
    }



    return (
        <div className="search">
            <NavLinks history={history} searchType={searchType}/>
            <div className="search-main">
                <label htmlFor="search-input" className="search-input-label">{`${SearchType} Search`}</label>
                <input type="text" id="search-input" className="search-input" placeholder={renderPlaceholder()} spellCheck="false" onChange={handleSearchInput} />
            </div>
            <Filters searchType={searchType} handleSearchFilter={handleSearchFilter}/>
        </div>
    );
}

export default SearchInput