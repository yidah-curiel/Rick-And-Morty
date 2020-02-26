import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { character, episode, location } from '../redux-saga/request_types';


const AllSeasons =
    [
        { value: "", label: "" },
        { value: "S01", label: "Season 1" },
        { value: "S02", label: "Season 2" },
        { value: "S03", label: "Season 3" }
    ]

const AllGenders =
    [
        '',
        'Male',
        'Female',
        'Genderless',
        'Unknown'
    ]

const AllTypes =
    ['', 'Planet',
        'Cluster',
        'Space station',
        'Microverse',
        'TV',
        'Resort',
        'Fantasy town',
        'Dream',
        'Dimension',
        'unknown',
        'Menagerie',
        'Game',
        'Customs',
        'Daycare',
        'Dwarf planet (Celestial Dwarf)',
        'Miniverse',
        'Teenyverse',
        'Box',
        'Spacecraft',
        'Artificially generated world',
        'Machine',
        'Arcade',
        'Spa']

const AllDimensions =
    ['',
        'Dimension C-137',
        'unknown',
        'Post-Apocalyptic Dimension',
        'Replacement Dimension',
        'Cronenberg Dimension',
        'Fantasy Dimension',
        'Dimension 5-126',
        'Testicle Monster Dimension',
        'Cromulon Dimension',
        'Dimension C-500A',
        'Dimension K-83',
        'Dimension J19ζ7',
        'Eric Stoltz Mask Dimension',
        "Evil Rick's Target Dimension",
        'Giant Telepathic Spiders Dimension',
        'Unknown dimension',
        'Dimension K-22',
        'Dimension D-99',
        'Dimension D716',
        'Dimension D716-B',
        'Dimension D716-C',
        'Dimension J-22',
        'Dimension C-35',
        'Pizza Dimension',
        'Phone Dimension',
        'Chair Dimension'
    ]
const AllSpecies =
    [
        'Human', 'Alien',
        'Humanoid', 'unknown',
        'Poopybutthole', 'Mytholog',
        'Animal', 'Vampire',
        'Robot', 'Cronenberg',
        'Disease', 'Parasite'
    ]

export {
    AllDimensions,
    AllSpecies,
    AllTypes
}

function FilterSelect({ handleSearchFilter, filtersToRender, filterName }) {
    const filterSelectLabel = filterName.charAt(0).toUpperCase() + filterName.slice(1)

    const useStyles = makeStyles({
        root: {
            display: 'flex',
        },
        label: {
            color: '#27c2c7',
            fontSize: '110%',
            fontFamily: 'GetSchwifty',
            textShadow: "-0.05em -0.05em 0.5em #c93920e8, 0.05em 0.05em 0.5em #fa67bd, 0.02em 0.07em 0.7em #3727c9;"
        },
        menu_item: {
            backgroundColor: 'white',// 'rgb(71, 196, 144)',
            fontFamily: 'Yeon Sung',
            boxShadow: "-0.03em 0.05em 1.5em 0.5em rgba(70, 247, 47, 0.3), 0.03em -0.02em 1em 0.3em rgba(17, 129, 36, 0.3), -0.01em 0.02em 0.5em 0.02em rgba(197, 46, 26, 0.651)"
        },
        icon: {
            color: '#27c2c7',
        },
        select: {
            fontFamily: 'Yeon Sung',
            color: '#27c2c7',
            '&:before': {
                borderColor: 'white',
            },            
            '&:after': {
                borderColor: '#27c2c7',
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <InputLabel className={classes.label}>{`${filterSelectLabel}: `}</InputLabel >
            <Select
                className={classes.select}
                onChange={handleSearchFilter}
                name={filterName}
                classes={{
                    icon: classes.icon
                }}
            >
                {filterName === "season" ?
                    filtersToRender.map((e, i) =>
                        <MenuItem className={classes.menu_item} key={i} value={e.value}>{e.label}</MenuItem>
                    )
                    :
                    filtersToRender.map((e, i) =>
                        <MenuItem className={classes.menu_item} key={i} value={e}>{e}</MenuItem>
                    )}


            </Select>
        </div>
    )
}


function Filters({ handleSearchFilter, searchType }) {



    switch (searchType) {
        case character:
            return (
                <div className="search-filters">
                    <div className="filter">
                        <FilterSelect handleSearchFilter={handleSearchFilter} filtersToRender={AllSpecies} filterName="species" />
                    </div>
                    <div className="filter">
                        <FilterSelect handleSearchFilter={handleSearchFilter} filtersToRender={AllGenders} filterName="gender" />
                    </div>
                </div>
            )
        case episode:
            return (
                <div className="search-filters">
                    <div className='filter'>
                        <FilterSelect handleSearchFilter={handleSearchFilter} filtersToRender={AllSeasons} filterName="season" />
                    </div>
                </div>
            )
        case location:
            return (
                <div className="search-filters">
                    <div className="filter">
                        <FilterSelect handleSearchFilter={handleSearchFilter} filtersToRender={AllTypes} filterName="type" />
                    </div>
                    <div className="filter">
                        <FilterSelect handleSearchFilter={handleSearchFilter} filtersToRender={AllDimensions} filterName="dimension" />
                    </div>
                </div>
            )
        default:
            return (null)
    }

}

export default Filters