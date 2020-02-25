import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeSearchType } from '../redux-saga/actions';
import { character, episode, location } from '../redux-saga/request_types';

function Home({ changeSearchType }) {

    const onNavClick = type => {
        console.log(type)
        changeSearchType(type)
    }

    return (
        <div className="navbar">
            <Link className="nav-link" to="/search/character" onClick={()=>onNavClick(character)}>
                <div>Search Characters</div>
            </Link>
            <Link className="nav-link" to="/search/episode" onClick={()=>onNavClick(episode)}>
                <div>Search Episodes</div>
            </Link>
            <Link className="nav-link" to="/search/location" onClick={()=>onNavClick(location)}>
                <div>Search Locations</div>
            </Link>
        </div>
    );
}





const mapDispatch = dispatch => {
    return {
        changeSearchType: (type) => dispatch(changeSearchType(type))
    };
}



export default connect(null, mapDispatch)(Home);
