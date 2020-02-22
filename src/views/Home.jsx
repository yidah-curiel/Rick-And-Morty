import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {

  
    render() {
        return (
            <React.Fragment>
                    <Link className="nav-link" to="/search/character">
                        Search Characters
                    </Link>
                    <Link className="nav-link" to="/search/episode">
                        Search Episodes
                    </Link>
                    <Link className="nav-link" to="/search/location">
                        Search Locations
                    </Link>
            </React.Fragment>
        );
    }
  }
  
  
  
  
  
  export default Home;
  