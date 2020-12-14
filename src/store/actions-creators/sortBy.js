import * as constants from '../actions/appActions';

export const sortByRatingDown = () => ({
    type: constants.SORT_BY_RATING_DOWN,
});

export const sortByRatingUp = () => ({
    type: constants.SORT_BY_RATING_UP,
});

export const sortByReleaseDateDown = () => ({
    type: constants.SORT_BY_RELEASE_DATE_DOWN,
});

export const sortByReleaseDateUp = () => ({
    type: constants.SORT_BY_RELEASE_DATE_UP,
});
