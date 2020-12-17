import * as actions from './sortBy';
import * as constants from '../actions/appActions';

describe('sortBy actions', () => {
    it('should create action sortByRatingDown', () => {
        const expectedAction = {
            type: constants.SORT_BY_RATING_DOWN,
        };
        expect(actions.sortByRatingDown()).toEqual(expectedAction);
    });

    it('should create action sortByRatingUp', () => {
        const expectedAction = {
            type: constants.SORT_BY_RATING_UP,
        };
        expect(actions.sortByRatingUp()).toEqual(expectedAction);
    });

    it('should create action sortByReleaseDateDown', () => {
        const expectedAction = {
            type: constants.SORT_BY_RELEASE_DATE_DOWN,
        };
        expect(actions.sortByReleaseDateDown()).toEqual(expectedAction);
    });

    it('should create action sortByReleaseDateUp', () => {
        const expectedAction = {
            type: constants.SORT_BY_RELEASE_DATE_UP,
        };
        expect(actions.sortByReleaseDateUp()).toEqual(expectedAction);
    });
});
