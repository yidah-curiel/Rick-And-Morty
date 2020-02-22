import React from 'react';
import Character from './Character';
import Episode from './Episode';
import Location from './Location';

export default function ({ searchType, results, firstCharacterRef }) {

    function renderCard (searchType, results, firstCharacterRef) {
        switch(searchType) {
            case "character":
                return (results.length > 1 ? results.map((character, index) => 
                <Character character={ character } key={ character.id } index={ index } firstCharacterRef={ firstCharacterRef } />)
                : <Character character={ results } key={ results.id } index={ 0 } firstCharacterRef={ firstCharacterRef } />)
                
            case "episode":
                return (results.length > 1 ? results.map((episode, index) =>
                <Episode episode={ episode } key={ episode.id } index={ index } firstCharacterRef={ firstCharacterRef } />)
                : <Episode episode={ results } key={ results.id } index={ 0 } firstCharacterRef={ firstCharacterRef } />)
            default:
                return (results.length > 1 ? results.map((location, index) => 
                <Location location={ location } key={ location.id } index={ index } firstCharacterRef={ firstCharacterRef } />)
                : <Location location={ results } key={ results.id } index={ 0 } firstCharacterRef={ firstCharacterRef } />)
          }
    }

    return (
        <div className="search-output">
            { results ?
                   renderCard(searchType, results, firstCharacterRef)
              : 
                <p className="no-results">No Results</p>
            }
        </div>
    );
  }

