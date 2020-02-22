import React from 'react';
import {
    AllDimensions,
    AllSpecies,
    AllTypes
} from '../utils/filters';

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
                            <select
                                id="filter-input"
                                className="filter-input"
                                onChange={handleSearchFilter}
                                name="species" >
                                <option value="" defaultValue>All</option>
                                {AllSpecies.map((e, i) =>
                                    <option id={i} value={e}>{e}</option>
                                )}
                            </select>
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
                return (<div>
                    <label htmlFor="filter-input" className="filter-input-label">Season</label>
                    <select
                        id="filter-input"
                        className="filter-input"
                        onChange={handleSearchFilter}
                        name="episode" >
                        <option value="" defaultValue>All</option>
                        <option value="S01">Season 1</option>
                        <option value="S02">Season 2</option>
                        <option value="S03">Season 3</option>
                    </select>
                </div>
                )
            default:
                return (
                    <div>
                        <label htmlFor="filter-input" className="filter-input-label">Type</label>
                        <select
                            id="filter-input"
                            className="filter-input"
                            onChange={handleSearchFilter}
                            name="type" >
                            <option value="" defaultValue>All</option>
                            {AllTypes.map((e, i) =>
                                <option id={i} value={e}>{e}</option>
                            )}
                        </select>
                        <label htmlFor="filter-input" className="filter-input-label">Dimension</label>
                        <select
                            id="filter-input"
                            className="filter-input"
                            onChange={handleSearchFilter}
                            name="dimension" >
                            <option value="" defaultValue>All</option>
                            {AllDimensions.map((e, i) =>
                                <option id={i} value={e}>{e}</option>
                            )}
                        </select>
                    </div>
                )
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