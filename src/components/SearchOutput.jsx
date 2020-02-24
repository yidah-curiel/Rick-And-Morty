import React from 'react';
import RenderCards from './RenderCards';

import { connect } from 'react-redux';

function SearchOutput ({ renderType, searchType, results, nestedResults }) {
    const resultsToRender = renderType === "nested" ? nestedResults : results;
    function renderCard(resultsToRender) {
                return (resultsToRender.length > 1 ? resultsToRender.map((result, index) =>
                <RenderCards card={result} searchType={searchType} key={result.id} index={index} />)
                : <RenderCards card={resultsToRender[0]} searchType={searchType} key={resultsToRender.id} index={0} />)
        
    } 

    return (
        <div className="search-output">
            { resultsToRender.length < 1 ?
                <div>
                    <p className="no-results">No Results</p>
                    <audio autoPlay={true}>
                        <source src="awwbitch.wav" type="audio/wav" />
                    </audio>
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
            nestedResults: state.nestedResults
        };
    };
    
 

    export default connect(mapState) (SearchOutput)