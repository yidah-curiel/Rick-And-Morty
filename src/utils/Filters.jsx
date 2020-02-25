import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { character, episode, location } from '../redux-saga/request_types';


const AllTypes =
    ['Planet',
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
    [
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


function Filters({ handleSearchFilter, searchType }) {

    const useStyles = makeStyles({
        root: {
            color: 'white',
            '&:before': {
                borderColor: 'white',
            },
            '&:after': {
                borderColor: 'black',
            }
        },
        menu_item: {
            backgroundColor: 'rgb(71, 196, 144)',
        },
        whiteColor: {
            color: 'white',
        }
    });

    const classes = useStyles();

    switch (searchType) {
        case character:
            return (
                <div className="search-filters">
                    <div>
                        <InputLabel className={classes.root}>Species</InputLabel >
                        <Select
                            className={classes.root}
                            onChange={handleSearchFilter}
                            name="species"
                            classes={{
                                icon: classes.whiteColor
                            }}
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
                            name="gender"
                            classes={{
                                icon: classes.whiteColor
                            }}
                        >
                            <MenuItem className={classes.menu_item} value="" defaultValue>All</MenuItem>
                            <MenuItem className={classes.menu_item} value="female">Female</MenuItem>
                            <MenuItem className={classes.menu_item} value="male">Male</MenuItem>
                            <MenuItem className={classes.menu_item} value="genderless">Genderless </MenuItem>
                            <MenuItem className={classes.menu_item} value="unknown">Unknown </MenuItem>
                        </Select>
                    </div>
                </div>
            )
        case episode:
            return (
                <div >
                    <InputLabel className={classes.root}>Season</InputLabel>
                    <Select
                        className={classes.root}
                        onChange={handleSearchFilter}
                        name="episode"
                        classes={{
                            icon: classes.whiteColor
                        }}
                    >
                        <MenuItem className={classes.menu_item} value="" defaultValue>All</MenuItem>
                        <MenuItem className={classes.menu_item} value="S01">Season 1</MenuItem>
                        <MenuItem className={classes.menu_item} value="S02">Season 2</MenuItem>
                        <MenuItem className={classes.menu_item} value="S03">Season 3</MenuItem>
                    </Select>
                </div>
            )
        case location:
            return (
                <div className="search-filters">
                    <div>
                        <InputLabel className={classes.root}>Type</InputLabel>
                        <Select
                            className={classes.root}
                            onChange={handleSearchFilter}
                            name="type"
                            classes={{
                                icon: classes.whiteColor
                            }}
                        >
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
                            name="dimension"
                            classes={{
                                icon: classes.whiteColor
                            }}
                        >
                            <MenuItem className={classes.menu_item} value="All" defaultValue>All</MenuItem>
                            {AllDimensions.map((e, i) =>
                                <MenuItem className={classes.menu_item} id={i} value={e}>{e}</MenuItem>
                            )}
                        </Select>
                    </div>
                </div>
            )
        default:
            return (null)
    }

}

export default Filters