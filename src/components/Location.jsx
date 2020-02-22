import React from 'react';
import { Link } from 'react-router-dom';


export default function({ location, firstCharacterRef, index }) {
  /*  const list = location.residents.map ?
                    location.residents.map(e => e.slice(40))
                    : location.residents[0].slice(40)
*/
    var list; 
    if (location.residents.length > 1) {
        list = location.residents.map(e => e.slice(42))
    } else if(location.residents.length === 1){
        list = location.residents[0].slice(42)
    } else if (!location.residents || location.residents.length < 1) list = ""
    console.log(list)

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
                        {
                            list === "" ?
                                <p className="character-info-item-data">  <span className="character-info-item-summary">{location.name}</span> has no residents</p>
                            :
                            <Link to={{
                                pathname: `/characters/${list}`,
                                state: {
                                    title: location.name,
                                    searchType: "character",
                                    resultType: "Resident"
                                }
                            }} className="detailsLink">
                                <div>Click to view all residents</div>
                                <div> of <span className="character-info-item-summary">{location.name}</span></div>
                            </Link>
                        }
                        
                    
                    </details>
  
                </div>
  
            </div>
  
        </details>
    );
  }