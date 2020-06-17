import { createStore, combineReducers, applyMiddleware } from 'redux'
import countReducer from '../src/reducers/countReducer' 
import promiseMiddleware from 'redux-promise';

const rootReducer = combineReducers({ count: countReducer })

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(promiseMiddleware));
}

export default configureStore;