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
                return ("e.g. 'Morty Jr'")
            case "episode":
                return ("e.g. 'Raising Gazorpazorp'")
            default:
                return ("e.g. 'Jerryboree'")
        }
    }

    const useStyles = makeStyles({
        root: {
            color: 'white'
        },
        menu_item: {
            backgroundColor: 'rgb(71, 196, 144)'
        }
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
                                className={classes.root}
                                onChange={handleSearchFilter}
                                name="species"
                            >
                                <MenuItem className={classes.menu_item} value="" >All</MenuItem>
                                {AllSpecies.map((e, i) =>
                                    <MenuItem className={classes.menu_item} key={i} value={e}>{e}</MenuItem>
                                )}
                            </Select>

                        </div>
                        <div>
                            <InputLabel className={classes.root}>Gender</InputLabel>
                            <Select
                                className={classes.root}
                                onChange={handleSearchFilter}
                                name="gender" >
                                <MenuItem className={classes.menu_item} value="" defaultValue>All</MenuItem>
                                <MenuItem className={classes.menu_item} value="female">Female</MenuItem>
                                <MenuItem className={classes.menu_item} value="male">Male</MenuItem>
                                <MenuItem className={classes.menu_item} value="genderless">Genderless </MenuItem>
                                <MenuItem className={classes.menu_item} value="unknown">Unknown </MenuItem>
                            </Select>
                        </div>
                    </>
                )
            case "episode":
                return (<div>
                    <InputLabel className={classes.root}>Season</InputLabel>
                    <Select
                        className={classes.root}
                        onChange={handleSearchFilter}
                        name="episode" >
                        <MenuItem className={classes.menu_item} value="" defaultValue>All</MenuItem>
                        <MenuItem className={classes.menu_item} value="S01">Season 1</MenuItem>
                        <MenuItem className={classes.menu_item} value="S02">Season 2</MenuItem>
                        <MenuItem className={classes.menu_item} value="S03">Season 3</MenuItem>
                    </Select>
                </div>
                )
            default:
                return (
                    <>
                        <div>
                            <InputLabel className={classes.root}>Type</InputLabel>
                            <Select
                                className={classes.root}
                                onChange={handleSearchFilter}
                                name="type" >
                                <MenuItem className={classes.menu_item} value="" defaultValue>All</MenuItem>
                                {AllTypes.map((e, i) =>
                                    <MenuItem className={classes.menu_item} id={i} value={e}>{e}</MenuItem>
                                )}
                            </Select>
                        </div>
                        <div>
                            <InputLabel className={classes.root}>Dimension</InputLabel>
                            <Select
                                className={classes.root}
                                onChange={handleSearchFilter}
                                name="dimension" >
                                <MenuItem className={classes.menu_item} value="All" defaultValue>All</MenuItem>
                                {AllDimensions.map((e, i) =>
                                    <MenuItem className={classes.menu_item} id={i} value={e}>{e}</MenuItem>
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