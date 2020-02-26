import React from 'react';
import RenderCards from './RenderCards';
import { connect } from 'react-redux';

function SearchOutput({ renderType, searchType, nestedType, results, nestedResults }) {
    const resultsToRender = renderType === "nested" ? nestedResults : results;
    const typeToRender = renderType === "nested" ? nestedType : searchType;
    console.log(resultsToRender)
    function renderCard(resultsToRender) {
        return (resultsToRender.length > 1 ? resultsToRender.map((result, index) =>
            <RenderCards card={result} searchType={typeToRender} key={result.id} index={index} />)
            : <RenderCards card={resultsToRender[0]} searchType={typeToRender} key={resultsToRender.id} index={0} />)

    }

    return (
        <div className="search-output">
            {!resultsToRender || resultsToRender.length < 1 ?
                <div>
                    <p className="no-results">No Results</p>
                    <p className="no-results">Squanch a different squanch!</p>
                </div>
                :
                renderCard(resultsToRender)

            }
        </div>
    );
}

const mapState = state => {

    return {
        searchType: state.searchType,
        results: state.results,
        nestedResults: state.nestedResults,
        nestedType: state.nestedType
    };
};



export default connect(mapState)(SearchOutput)