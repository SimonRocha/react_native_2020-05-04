import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from '../src/reducers/userReducer' 
import promiseMiddleware from 'redux-promise';

const rootReducer = combineReducers({ user_state: userReducer })

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(promiseMiddleware));
}

export default configureStore;