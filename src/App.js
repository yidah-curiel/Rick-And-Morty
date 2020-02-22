import React from 'react';
import './App.css';
import Home from './views/Home';
import EpisodeCharacters from './views/EpisodeCharacters';
import { Route } from 'react-router-dom';


function App(){
 
    return(
        <>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/characters/:list" component={EpisodeCharacters} /> 
        </> 
    )
}

export default App