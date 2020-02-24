import React from "react";
import SearchOutput from '../components/SearchOutput';
import { connect } from "react-redux";

function NestedResults({ title, resultType, searched }) {
    return (
        <React.Fragment>
            <header>
                <h1 className="heading">{title} <span>{resultType}</span></h1>
            </header>
            <main>
                {searched ? <SearchOutput renderType="nested" /> 
                : <div className="search-loader" />}
            </main>
        </React.Fragment>
    );

}

const mapState = state => {
    return {
        searched: state.searched,
        resultType: state.resultType,
        title: state.title
    };
};



export default connect(mapState)(NestedResults)