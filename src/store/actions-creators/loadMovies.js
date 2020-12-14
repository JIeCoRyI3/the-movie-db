import * as constants from '../../store/actions/appActions';

export const loadMovies = (body) => ({
    type: constants.LOAD_MOVIES,
    payload: {
        moviesList: body,
    },
});
