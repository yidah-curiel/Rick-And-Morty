import React from 'react';
import Character from './Character';
import Episode from './Episode';
import Location from './Location';

export default function ({ searchType, results, firstCharacterRef }) {

    function renderCard (searchType, results, firstCharacterRef) {
        switch(searchType) {
            case "character":
                return (results.map((character, index) => 
                <Character character={ character } key={ character.id } index={ index } firstCharacterRef={ firstCharacterRef } />)
                )
            case "episode":
                return (results.map((episode, index) =>
                <Episode episode={ episode } key={ episode.id } index={ index } firstCharacterRef={ firstCharacterRef } />))
            default:
                return (results.map((location, index) => 
                <Location location={ location } key={ location.id } index={ index } firstCharacterRef={ firstCharacterRef } />))
          }
    }

    return (
        <div className="search-output">
            { results.length > 0 ?
                   renderCard(searchType, results, firstCharacterRef)
              : 
                <p className="no-results">No Results Found</p>
            }
        </div>
    );
  }

