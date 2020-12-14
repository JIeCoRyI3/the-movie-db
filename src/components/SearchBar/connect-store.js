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
            api.getAllGenres().then((genres) => {
                genres.genres.map((genre) => {
                    if (genre.name.includes(filterObj['with_genres'])) {
                        filterObj['with_genres'] = genre.id;
                    }
                    return 1;
                });

                api.filterWithGenres(filterObj).then((res) => {
                    dispatch(loadMovies(res.results));
                });
            });
        }
    };
};
