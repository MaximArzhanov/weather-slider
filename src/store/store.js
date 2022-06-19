import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk'

let reducers = combineReducers({
    auth: authReducer,
    currentUser: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// const store = createStore(reducers);

export default store;
