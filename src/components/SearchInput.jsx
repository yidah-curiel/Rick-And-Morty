import React from 'react';
import {
    AllDimensions,
    AllSpecies,
    AllTypes
} from '../utils/filters';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';


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

    const useStyles = makeStyles({
        root: {
            color: 'white'
        },
    });

    const classes = useStyles();

    function renderFilters() {

        switch (searchType) {
            case "character":
                return (
                    <>
                        <div>
                            <InputLabel className={classes.root}>Species</InputLabel >
                            <Select
                                onChange={handleSearchFilter}
                                name="species"
                            >
                                <MenuItem value="" >All</MenuItem>
                                {AllSpecies.map((e, i) =>
                                    <MenuItem key={i} value={e}>{e}</MenuItem>
                                )}
                            </Select>

                        </div>
                        <div>
                            <InputLabel className={classes.root}>Gender</InputLabel>
                            <Select
                                onChange={handleSearchFilter}
                                name="gender" >
                                <option value="" defaultValue>All</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="genderless">Genderless </option>
                                <option value="unknown">Unknown </option>
                            </Select>
                        </div>
                    </>
                )
            case "episode":
                return (<div>
                    <InputLabel className={classes.root}>Season</InputLabel>
                    <Select
                        className="filter-inputs"
                        onChange={handleSearchFilter}
                        name="episode" >
                        <option value="" defaultValue>All</option>
                        <option value="S01">Season 1</option>
                        <option value="S02">Season 2</option>
                        <option value="S03">Season 3</option>
                    </Select>
                </div>
                )
            default:
                return (
                    <>
                        <div>
                            <InputLabel className={classes.root}>Type</InputLabel>
                            <Select
                                onChange={handleSearchFilter}
                                name="type" >
                                <option value="" defaultValue>All</option>
                                {AllTypes.map((e, i) =>
                                    <option id={i} value={e}>{e}</option>
                                )}
                            </Select>
                        </div>
                        <div>
                            <InputLabel className={classes.root}>Dimension</InputLabel>
                            <Select
                                onChange={handleSearchFilter}
                                name="dimension" >
                                <option value="All" defaultValue>All</option>
                                {AllDimensions.map((e, i) =>
                                    <option id={i} value={e}>{e}</option>
                                )}
                            </Select>
                        </div>
                    </>
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
                <InputLabel className={classes.root}>Filter By:</InputLabel>
                {renderFilters()}
            </div>
        </div>
    );
}