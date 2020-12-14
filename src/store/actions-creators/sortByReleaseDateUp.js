import { constant } from 'lodash';
import * as constants from '../../store/actions/appActions';

export const sortByReleaseDateUp = () => ({
    type: constants.SORT_BY_RELEASE_DATE_UP,
});
