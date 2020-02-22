import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {


    render() {
        return (
            <div className="navbar">
                <Link className="nav-link" to="/search/character">
                    <div>Search Characters</div>
                </Link>
                <Link className="nav-link" to="/search/episode">
                    <div>Search Episodes</div>
                </Link>
                <Link className="nav-link" to="/search/location">
                    <div>Search Locations</div>
                </Link>
            </div>
        );
    }
}





export default Home;
