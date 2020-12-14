import { loadMovies } from '../../store/actions-creators/loadMovies';
import ApiClient from '../../api/apiClient';

const api = new ApiClient();

export const loadData = () => {
    return (dispatch) => {
        api.getAllMovies().then((res) => {
            console.log('ert');
            dispatch(loadMovies(res.results));
        });
    };
};
