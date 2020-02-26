import React from 'react';
import Filters from '../utils/Filters';
import NavLinks from '../utils/NavLinks';

function SearchInput({ handleSearchInput, handleSearchFilter, searchType, history }) {
    /*
    function renderPlaceholder() {
        switch (searchType) {
            case "character":
                return ("Character Name")
            case "episode":
                return ("e.g. 'Get Schwifty'")
            default:
                return ("e.g. 'Citadel of Ricks'")
        }
    }
    */


    return (
        <div className="search">
            <div className="search-main">
                <NavLinks history={history} searchType={searchType} />
            </div>
            <div className="search-main">
                <div>
                    <input type="text" id="search-input" className="search-input" placeholder={`${searchType} Name`} spellCheck="false" onChange={handleSearchInput} />
                </div>
                <div>
                    <Filters searchType={searchType} handleSearchFilter={handleSearchFilter} />
                </div>
            </div>
        </div>
    );
}

export default SearchInput