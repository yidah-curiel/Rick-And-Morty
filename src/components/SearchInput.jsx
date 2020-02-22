import React from 'react';

export default function ({ handleSearchInput, handleSearchFilter, searchType }) {
    const SearchType = searchType.charAt(0).toUpperCase() + searchType.slice(1)

    function renderPlaceholder() {
        switch (searchType) {
            case "character":
                return ("e.g. 'Rick'")
            case "episode":
                return ("e.g. 'Pilot'")
            default:
                return ("e.g. 'Citadel of Ricks'")
        }
    }

  /*  const [gender, setGender] = React.useState('');
    const handleGenderChange = event => {
        setGender(event.target.value);
      };*/

    function renderFilters() {
        
        switch (searchType) {
            case "character":
               
                return (
                    <>
                        <div>
                            <label htmlFor="filter-input" className="filter-input-label">Species</label>
                            <input 
                                type="text" 
                                id="filter-input" 
                                className="filter-input" 
                                placeholder="e.g.'humanoid'" 
                                spellCheck="false" 
                                name="species"
                                onChange={handleSearchFilter} 
                            />
                        </div>
                        <div>
                            <label htmlFor="filter-input" className="filter-input-label">Gender</label>
                            <select
                                id="filter-input" 
                                className="filter-input" 
                                onChange={handleSearchFilter}
                                name="gender" >
                                    <option value="" defaultValue>All</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="genderless">Genderless </option>
                                    <option value="unknown">Unknown </option>
                            </select>
                        </div>
                    </>
                )
            case "episode":
                return ("e.g. 'Pilot'")
            default:
                return ("e.g. 'Citadel of Ricks'")
        }

    }

    return (
        <div className="search">
            <div className="search-main">
                <label htmlFor="search-input" className="search-input-label">{`${SearchType} Search`}</label>
                <input type="text" id="search-input" className="search-input" placeholder={renderPlaceholder()} spellCheck="false" onChange={handleSearchInput} />
            </div>
            <div className="search-filters">
                <h4>Filter By:</h4>
                {renderFilters()}
            </div>
        </div>
    );
}