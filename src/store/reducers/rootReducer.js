import { combineReducers } from 'redux';
import { appReducer as app } from './appReducer.js';

export const rootReducer = combineReducers({
    app,
});
