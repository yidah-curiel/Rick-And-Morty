import React from 'react';
import { Link } from 'react-router-dom';


export default function({ character, firstCharacterRef, index }) {
    const list = character.episode.map(e => e.slice(40))
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
                        <summary className="character-info-item-summary">Location</summary>
                        <p className="character-info-item-data">{ character.location.name }</p>
                    </details>
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Episodes</summary>

                        <Link to={{
                            pathname: `/results/${list}`,
                            state: {
                                title: character.name,
                                searchType: "episode",
                                resultType: "Episode"
                            }
                        }} className="detailsLink">{`Click to view all episodes ${character.name} is in`}</Link>
                    </details>
  
                </div>
  
                <div className="character-image-container">
                    <img className="character-image" src={ character.image } alt={ character.name } />
                </div>
  
            </div>
  
        </details>
    );
  }