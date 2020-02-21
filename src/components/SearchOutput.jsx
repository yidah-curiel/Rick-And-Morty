import React from 'react';
import Character from './Character';
import Episode from './Episode';

export default function ({ searchType, results, firstCharacterRef }) {
    return (
        <div className="search-output">
            { searchType === "character" ?
                results.length > 0 ?
                    results.map((character, index) => <Character character={ character } key={ character.id } index={ index } firstCharacterRef={ firstCharacterRef } />) :
                    <p className="no-results">No Results Found</p>
              : 
               results.length > 0 ?
                    results.map((episode, index) => <Episode episode={ episode } key={ episode.id } index={ index } firstCharacterRef={ firstCharacterRef } />) :
                        <p className="no-results">No Results Found</p>
            }
        </div>
    );
  }

