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
            {/* React Fragment  */}
            <header>
                <Link style={{textDecoration: "none"}} to="/" onClick={onHomeClick}>
                    <h1 className="heading">Rick <span>And</span> Morty</h1>
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