import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { CounterReducer } from './Features/Counter/reducer';

let rootReducers = combineReducers({
    counter: CounterReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;