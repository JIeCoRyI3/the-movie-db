import * as constants from '../../store/actions/appActions';

export const loadGenres = (body) => ({
    type: constants.LOAD_GENRES,
    payload: {
        genresList: body,
    },
});
