import { combineReducers } from 'redux';
import { appReducer as app } from './reducers/appReducer.js';

export const rootReducer = combineReducers({
    app,
});
