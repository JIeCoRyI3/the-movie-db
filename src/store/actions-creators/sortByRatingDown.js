import { constant } from 'lodash';
import * as constants from '../../store/actions/appActions';

export const sortByRatingDown = () => ({
    type: constants.SORT_BY_RATING_DOWN,
});
