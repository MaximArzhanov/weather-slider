import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import userLoginStatusReducer from './reducers/userLoginStatusReducer';
import weatherPageReducer from './reducers/weatherPageReducer';
import sliderReducer from './reducers/sliderReducer';
import thunk from 'redux-thunk'

let reducers = combineReducers({
    auth: authReducer,
    currentUser: userReducer,
    userloginStatus: userLoginStatusReducer,
    weatherPage: weatherPageReducer,
    slider: sliderReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// const store = createStore(reducers);

export default store;
