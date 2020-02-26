import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetState } from '../redux-saga/actions';

function Layout (props) {
    function onHomeClick() {
        props.resetState()
    }

    return (
        <>
            {/* React Fragment Rickapedia  */}
            <header className="heading" >
                <Link style={{textDecoration: "none", color:'#27c2c7'}}  to="/" onClick={onHomeClick}>
                    <h1>Rick <span> and </span> Morty</h1>
                </Link>
            </header>
            <main >
                {props.children}
            </main>
        </>
    );
}

const mapDispatch = dispatch => {
    return {
        resetState: () => dispatch(resetState())
    };
}



export default connect(null, mapDispatch) (Layout)