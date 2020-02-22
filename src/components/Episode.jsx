import React from 'react';
import { Link } from 'react-router-dom';


export default function ({ episode, firstCharacterRef, index }) {
    const list = episode.characters.map(e => e.slice(42))
    return (
        <details className="character-details" >

            <summary className="character-summary" ref={index === 0 ? firstCharacterRef : null}>{episode.name}</summary>

            <div className="character-container">

                <div className="character-info">

                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Name</summary>
                        <p className="character-info-item-data">{episode.name}</p>
                    </details>

                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Air Date</summary>
                        <p className="character-info-item-data">{episode.air_date}</p>
                    </details>

                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Episode</summary>
                        <p className="character-info-item-data">{episode.episode}</p>
                    </details>

                    <details className="character-info-item" open>
                        <summary className="character-info-item-summary">Characters</summary>

                        <Link to={{
                            pathname: `/results/${list}`,
                            state: {
                                title: episode.name,
                                searchType: "character",
                                resultType: "Character"
                            }
                        }} className="detailsLink">{`Click to view all characters that appear in ${episode.name}`}</Link>
                    </details>

                </div>

            </div>

        </details>
    );
}