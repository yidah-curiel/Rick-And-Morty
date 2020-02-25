import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import reducer from './redux-saga/reducers';
import rootSaga from './redux-saga/sagas'
import Layout from './components/Layout';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Layout>
                    <App />
                </Layout>
            </Router>
        </Provider>
        , document.getElementById('root'));
}

render();
store.subscribe(render)