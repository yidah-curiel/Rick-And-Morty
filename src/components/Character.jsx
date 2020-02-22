import React from 'react';
import { Link } from 'react-router-dom';


export default function({ character, firstCharacterRef, index }) {
    var list; 
    if (character.episode && character.episode.length > 1) {
        list = character.episode.map(e => e.slice(40))
    } else if(character.episode && character.episode.length === 1){
        list = character.episode[0].slice(40)
    }
                    
    return (
        <details className="character-details" >
  
            <summary className="character-summary" ref={ index === 0 ? firstCharacterRef : null }>{ character.name }</summary>
  
            <div className="character-container">
  
                <div className="character-info">
  
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Name</summary>
                        <p className="character-info-item-data">{ character.name }</p>
                    </details>
  
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Species</summary>
                        <p className="character-info-item-data">{ character.species }</p>
                    </details>
  
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Gender</summary>
                        <p className="character-info-item-data">{ character.gender }</p>
                    </details>

                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Status</summary>
                        <p className="character-info-item-data">{ character.status }</p>
                    </details>
                    {character.location ? 
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Location</summary>
                        <p className="character-info-item-data">{ character.location.name }</p>
                    </details>
                    : null}
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Episodes</summary>
                        <Link to={{
                            pathname: `/episodes/${list}`,
                            state: {
                                title: character.name,
                                searchType: "episode",
                                resultType: "Episode"
                            }
                        }} className="detailsLink">
                            <div>Click to view all episodes</div>
                            <div> that <span className="character-info-item-summary">{character.name}</span> appears in</div>
                        </Link>
                    </details>
  
                </div>
  
                <div className="character-image-container">
                    <img className="character-image" src={ character.image } alt={ character.name } />
                </div>
  
            </div>
  
        </details>
    );
  }