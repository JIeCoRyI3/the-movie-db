import { LOAD_MOVIES, RESET } from '../actions/appActions';

const initialState = {
    currMovie: null,
    moviesList: null,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET: {
            return initialState;
        }
        case LOAD_MOVIES: {
            return { ...state, ...action.payload };
        }
        default: {
            return state;
        }
    }
};
