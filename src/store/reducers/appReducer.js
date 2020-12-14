import {
    RESET,
    SORT_BY_RATING_DOWN,
    SORT_BY_RATING_UP,
    SORT_BY_RELEASE_DATE_DOWN,
    SORT_BY_RELEASE_DATE_UP,
} from '../actions/appActions';
import * as constants from '../actions/appActions';

const _ = require('lodash');

const initialState = {
    currMovie: null,
    moviesList: null,
    byRating: false,
    byReleaseDate: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOAD_MOVIES: {
            return { ...state, ...action.payload };
        }
        case SORT_BY_RATING_DOWN: {
            return {
                ...state,
                byRating: true,
                moviesList: _.sortBy(
                    state.moviesList,
                    'vote_average'
                ).reverse(),
            };
        }
        case SORT_BY_RATING_UP: {
            return {
                ...state,
                byRating: false,
                moviesList: _.sortBy(state.moviesList, 'vote_average'),
            };
        }
        case SORT_BY_RELEASE_DATE_DOWN: {
            return {
                ...state,
                byReleaseDate: true,
                moviesList: _.sortBy(
                    state.moviesList,
                    'release_date'
                ).reverse(),
            };
        }
        case SORT_BY_RELEASE_DATE_UP: {
            return {
                ...state,
                byReleaseDate: false,
                moviesList: _.sortBy(state.moviesList, 'release_date'),
            };
        }
        default: {
            return state;
        }
    }
};
