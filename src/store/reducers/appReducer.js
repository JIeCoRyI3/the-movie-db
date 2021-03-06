import * as constants from '../actions/appActions';
import _ from 'lodash';

const initialState = {
    currMovie: null,
    moviesList: null,
    byRating: false,
    byReleaseDate: false,
    genresList: null,
    loading: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOAD_MOVIES: {
            return { ...state, ...action.payload };
        }
        case constants.LOAD_GENRES: {
            return { ...state, ...action.payload };
        }
        case constants.LOADING: {
            return { ...state, ...action.payload };
        }

        case constants.SORT_BY_RATING_DOWN: {
            return {
                ...state,
                byRating: true,
                moviesList: _.sortBy(
                    state.moviesList,
                    'vote_average'
                ).reverse(),
            };
        }
        case constants.SORT_BY_RATING_UP: {
            return {
                ...state,
                byRating: false,
                moviesList: _.sortBy(state.moviesList, 'vote_average'),
            };
        }
        case constants.SORT_BY_RELEASE_DATE_DOWN: {
            return {
                ...state,
                byReleaseDate: true,
                moviesList: _.sortBy(
                    state.moviesList,
                    'release_date'
                ).reverse(),
            };
        }
        case constants.SORT_BY_RELEASE_DATE_UP: {
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
