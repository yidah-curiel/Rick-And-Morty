import React from 'react';
import './App.css';
import Search from './views/Search';
import NestedResults from './views/NestedResults';
import { Route } from 'react-router-dom';
import Home from './views/Home';


function App(){
 
    return(
        <>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/search/:searchType" component={Search} /> 
            <Route exact path="/results/:list" component={NestedResults} /> 
        </> 
    )
}

export default App