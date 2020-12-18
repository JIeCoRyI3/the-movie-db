import { loadMovies } from '../../store/actions-creators/loadMovies';
import ApiClient from '../../api/apiClient';
import { LOADING } from '../../store/actions/appActions';

const api = new ApiClient();

export const loadDataByTitle = (filterObj) => {
    return (dispatch) => {
        dispatch({ type: LOADING, payload: { loading: true } });
        return filterObj.query
            ? api.filterBy(filterObj).then((res) => {
                  dispatch(loadMovies(res.results.splice(0, 18)));
                  dispatch({ type: LOADING, payload: { loading: false } });
              })
            : api.getAllMovies().then((res) => {
                  dispatch(loadMovies(res.results.splice(0, 18)));
                  dispatch({ type: LOADING, payload: { loading: false } });
              });
    };
};

export const loadDataByGenre = (filterObj) => {
    return (dispatch, getState) => {
        dispatch({ type: LOADING, payload: { loading: true } });
        if (filterObj.with_genres) {
            const genres = getState().app.genresList;
            const genre = genres.find((genre) =>
                genre.name
                    .toLowerCase()
                    .includes(filterObj.with_genres.toLowerCase())
            );
            filterObj.with_genres = !genre ? null : genre.id;

            return api.filterWithGenres(filterObj).then((res) => {
                dispatch(loadMovies(res.results.splice(0, 18)));
                dispatch({ type: LOADING, payload: { loading: false } });
            });
        } else {
            return api.getAllMovies().then((res) => {
                dispatch(loadMovies(res.results.splice(0, 18)));
                dispatch({ type: LOADING, payload: { loading: false } });
            });
        }
    };
};

export const loadDataByGenreOrTitle = (filterObj) => {
    return (dispatch, getState) => {
        dispatch({ type: LOADING, payload: { loading: true } });
        const filterObjForTitle = {
            query: filterObj.title_and_genres,
        };

        const filterObjForGenre = {
            with_genres: filterObj.title_and_genres,
        };

        return filterObj.title_and_genres
            ? api.filterBy(filterObjForTitle).then((resByTitle) => {
                  const genres = getState().app.genresList;
                  const genre = genres.find((genre) =>
                      genre.name
                          .toLowerCase()
                          .includes(filterObjForGenre.with_genres.toLowerCase())
                  );
                  filterObjForGenre.with_genres = !genre ? null : genre.id;

                  api.filterWithGenres(filterObjForGenre).then((resByGenre) => {
                      const moviesList = createUniqueListFromTwoLists(
                          resByTitle.results,
                          resByGenre.results
                      )
                          .sort((a, b) => a.id - b.id)
                          .splice(0, 18);
                      dispatch(loadMovies(moviesList));
                      dispatch({ type: LOADING, payload: { loading: false } });
                  });
              })
            : api.getAllMovies().then((res) => {
                  dispatch(loadMovies(res.results.splice(0, 18)));
                  dispatch({ type: LOADING, payload: { loading: false } });
              });
    };
};

export function createUniqueListFromTwoLists(firstList, secondList) {
    return [...new Set(firstList.concat(secondList).map(JSON.stringify))].map(
        JSON.parse
    );
}
