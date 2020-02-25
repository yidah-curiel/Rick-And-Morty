import React from "react";
import { connect } from 'react-redux';
import { changeSearchType } from '../redux-saga/actions';

import HomeNav from '../utils/HomeNav';

function Home({ changeSearchType, history }) {

    const onNavClick = (type, to) => {
        history.push(to)
        changeSearchType(type)
    }

    return (
      <HomeNav onClick={(type,to)=>onNavClick(type,to)}/>
    );
}

const mapDispatch = dispatch => {
    return {
        changeSearchType: (type) => dispatch(changeSearchType(type))
    };
}



export default connect(null, mapDispatch)(Home);
