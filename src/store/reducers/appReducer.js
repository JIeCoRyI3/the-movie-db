import * as constants from '../actions/appActions';

const initialState = {
    currMovie: null,
    moviesList: null,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOAD_MOVIES: {
            return { ...state, ...action.payload };
        }
        default: {
            return state;
        }
    }
};
