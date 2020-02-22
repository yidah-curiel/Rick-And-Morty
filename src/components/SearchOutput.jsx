import React from 'react';
import Character from './Character';
import Episode from './Episode';
import Location from './Location';

export default function ({ searchType, results, firstCharacterRef }) {

    function renderCard(searchType, results, firstCharacterRef) {
        console.log(results)
        switch (searchType) {
            case "character":
                return (results.length > 0 ? results.map((character, index) =>
                    <Character character={character} key={character.id} index={index} firstCharacterRef={firstCharacterRef} />)
                    : <Character character={results} key={results.id} index={0} firstCharacterRef={firstCharacterRef} />)

            case "episode":
                return (results.length > 0 ? results.map((episode, index) =>
                    <Episode episode={episode} key={episode.id} index={index} firstCharacterRef={firstCharacterRef} />)
                    : <Episode episode={results} key={results.id} index={0} firstCharacterRef={firstCharacterRef} />)
            default:
                return (results.length > 0 ? results.map((location, index) =>
                    <Location location={location} key={location.id} index={index} firstCharacterRef={firstCharacterRef} />)
                    :
                    <Location location={results} key={results.id} index={0} firstCharacterRef={firstCharacterRef} />)
        }
    } 

    return (
        <div className="search-output">
            { Array.isArray(results) && results.length < 1 ?
                <div>
                    <p className="no-results">No Results</p>
                    <audio autoplay>
                        <source src="awwbitch.wav" type="audio/wav" />
                    </audio>
               </div>
                :
                renderCard(searchType, results, firstCharacterRef)
                
                    }
        </div>
                    );
          }
        
