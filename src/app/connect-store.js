import ApiClient from '../api/apiClient';
import { loadGenres } from '../store/actions-creators/loadGenres';

const api = new ApiClient();

export const loadData = () => {
    return (dispatch) => {
        api.getAllGenres().then((res) => {
            dispatch(loadGenres(res.genres));
        });
    };
};
