import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import userLoginStatusReducer from './reducers/userLoginStatusReducer';
import weatherPageReducer from './reducers/weatherPageReducer';
import sliderReducer from './reducers/sliderReducer';
import weatherHistoryReducer from './reducers/weatherHistoryReducer';
import popupReducer from './reducers/popupReducer';
import loadingReducer from './reducers/loadingReducer';
import thunk from 'redux-thunk'

let reducers = combineReducers({
    currentUser: userReducer,
    userloginStatus: userLoginStatusReducer,
    weatherPage: weatherPageReducer,
    slider: sliderReducer,
    weatherHistory: weatherHistoryReducer,
    popup: popupReducer,
    loading: loadingReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// const store = createStore(reducers);

export default store;
