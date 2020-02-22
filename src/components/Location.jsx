import React from 'react';
import { Link } from 'react-router-dom';


export default function({ location, firstCharacterRef, index }) {
    const list = location.residents.map ?
                    location.residents.map(e => e.slice(40))
                    : location.residents[0].slice(40)
    return (
        <details className="character-details" >
  
            <summary className="character-summary" ref={ index === 0 ? firstCharacterRef : null }>{ location.name }</summary>
  
            <div className="character-container">
  
                <div className="character-info">
  
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Name</summary>
                        <p className="character-info-item-data">{ location.name }</p>
                    </details>
  
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Type</summary>
                        <p className="character-info-item-data">{ location.type }</p>
                    </details>
  
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Dimension</summary>
                        <p className="character-info-item-data">{ location.dimension }</p>
                    </details>
  
                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Residents</summary>
                        <p className="character-info-item-data">{ list }</p>
                        <Link to={{
                            pathname: `/results/${list}`,
                            state: {
                                title: location.name,
                                searchType: "character",
                                resultType: "Resident"
                            }
                        }} className="detailsLink">{`Click to view all residents in ${location.name}`}</Link>
                    </details>
  
                </div>
  
            </div>
  
        </details>
    );
  }