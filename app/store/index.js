import AppReducer from "./reducers";

import {applyMiddleware, createStore, compose} from "redux";

import {persistStore, autoRehydrate} from 'redux-persist'

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let store = createStore(
    AppReducer,
    composeEnhancers(applyMiddleware(promise(), thunk /*, logger()*/), autoRehydrate())
);

persistStore(store, { whitelist: ['test'] });

export default store;