import React from 'react';
import Filters from '../utils/Filters';
//import NavLinks from '../utils/NavLinks';

function SearchInput({ handleSearchInput, handleSearchFilter, searchType }) {
    const SearchType = searchType.charAt(0).toUpperCase() + searchType.slice(1)

    function renderPlaceholder() {
        switch (searchType) {
            case "character":
                return ("e.g. 'Morty Jr'")
            case "episode":
                return ("e.g. 'Raising Gazorpazorp'")
            default:
                return ("e.g. 'Jerryboree'")
        }
    }



    return (
        <div className="search">
            {/*<NavLinks searchType={searchType} />*/}
            <div className="search-main">
                <label htmlFor="search-input" className="search-input-label">{`${SearchType} Search`}</label>
                <input type="text" id="search-input" className="search-input" placeholder={renderPlaceholder()} spellCheck="false" onChange={handleSearchInput} />
            </div>
            <Filters searchType={searchType} handleSearchFilter={handleSearchFilter}/>
        </div>
    );
}

export default SearchInput