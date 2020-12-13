import { RESET } from '../actions/appActions';

const initialState = {
    currMovie: null,
    moviesList: null,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};
