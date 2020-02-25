import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { nestedSearch } from '../redux-saga/actions';
import { Link } from 'react-router-dom';
import { character, episode, location } from '../redux-saga/request_types';

function RenderCards({ nestedSearch, card, index, searchType }) {

    const list = () => {
        const filtNum = searchType === character ? 40 : 42
        var param = "episode";
        if (searchType === location) {
            param = "residents"
        } else if (searchType === episode) {
            param = "characters"
        }

        if (card[param].length > 1) {
            return card[param].map(e => e.slice(filtNum))
        } else if (card[param].length === 1) {
            return card[param][0].slice(filtNum)
        } return []
    }

    function onClick() {
        const { name } = card;
        nestedSearch(searchType, list(), name)
    }

    function renderListLink() {
        switch (searchType) {
            case "character":
                return (
                    <Link to={`/results/${card.name}`} onClick={onClick} className="detailsLink" >
                        <div>Click to view all episodes</div>
                        <div> that <span className="card-info-item-summary">{card.name}</span> appears in</div>
                    </Link>
                )
            case "episode":
                return (
                    <Link to={`/results/${card.name}`} onClick={onClick} className="detailsLink" >
                        <div>Click to view all characters that</div>
                        <div>appear in <span className="card-info-item-summary">{card.name}</span></div>
                    </Link>
                )
            case "location":
                if (card.residents.length < 1){
                        return (
                            <p className="card-info-item-data">  
                            <span className="card-info-item-summary">{card.name}</span> has no known residents
                            </p>
                        )
                }
                return (
                    <Link to={`/results/${card.name}`} onClick={onClick} className="detailsLink" >
                        <div>Click to view all residents</div>
                        <div> of <span className="card-info-item-summary">{card.name}</span></div>
                    </Link>
                )
            default:
                return (
                    <Link to={`/results/${card.name}`} onClick={onClick} className="detailsLink" >
                    </Link>
                )
        }
    }

    return (
        <>
            {searchType === character ?
                <Card onClick={onClick}
                    index={index}
                    image={card.image}
                    name={card.name}
                    details={[
                        ["Name", card.name],
                        ["Species", card.species],
                        ["Gender", card.gender],
                        ["Status", card.status],
                        ["Location", card.location.name]
                    ]}
                    list={{ name: "Episodes", value: renderListLink() }}
                />
                : searchType === episode ?
                    <Card onClick={onClick}
                        index={index}
                        name={card.name}
                        details={[
                            ["Name", card.name],
                            ["Air Date", card.air_date],
                            ["Episode Name", card.episode],
                        ]}
                        list={{ name: "Characters", value: renderListLink() }}
                    />
                    :
                    <Card onClick={onClick}
                        index={index}
                        image={card.image}
                        name={card.name}
                        details={[
                            ["Name", card.name],
                            ["Type", card.type],
                            ["Dimension", card.dimension]
                        ]}
                        list={{ name: "Residents", value: renderListLink() }}
                    />

            }
        </>

    );
}

const mapDispatch = dispatch => {
    return {
        nestedSearch: (searchType, searchList, title) => dispatch(nestedSearch(searchType, searchList, title))
    };
}



export default connect(null, mapDispatch)(RenderCards)