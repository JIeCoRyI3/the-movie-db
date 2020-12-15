import { loadMovies } from '../../store/actions-creators/loadMovies';
import ApiClient from '../../api/apiClient';

const api = new ApiClient();

export const loadData = (filterObj) => {
    return (dispatch) => {
        const filter = localStorage.getItem('filter');

        if (filter === 'query') {
            api.filterBy(filterObj).then((res) => {
                dispatch(loadMovies(res.results));
            });
        } else if (filter === 'with_genres') {
            api.getAllGenres().then((res) => {
                const genre = res.genres.find((genre) =>
                    genre.name.includes(filterObj['with_genres'])
                );
                filterObj['with_genres'] = !genre ? null : genre.id;

                api.filterWithGenres(filterObj).then((res) => {
                    dispatch(loadMovies(res.results));
                });
            });
        }
    };
};
