import React from 'react';

export default function({ episode, firstCharacterRef, index }) {
    return (
        <details className="character-details" >
  
            <summary className="character-summary" ref={ index === 0 ? firstCharacterRef : null }>{ episode.name }</summary>
  
            <div className="character-container">
  
                <div className="character-info">
  
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Name</summary>
                        <p className="character-info-item-data">{ episode.name }</p>
                    </details>
  
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Air Date</summary>
                        <p className="character-info-item-data">{ episode.air_date }</p>
                    </details>
  
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Episode</summary>
                        <p className="character-info-item-data">{ episode.episode }</p>
                    </details>
  
                </div>
  
            </div>
  
        </details>
    );
  }