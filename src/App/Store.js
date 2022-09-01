import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './Features/Counter/reducer';

let rootReducers = combineReducers({
    counter: counterReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let Store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default Store;