import { loadMovies } from '../../store/actions-creators/loadMovies';
import ApiClient from '../../api/apiClient';

const api = new ApiClient();

export const loadDataByTitle = (filterObj) => {
    return (dispatch) => {
        return filterObj.query
            ? api.filterBy(filterObj).then((res) => {
                  dispatch(loadMovies(res.results.splice(0, 18)));
              })
            : api.getAllMovies().then((res) => {
                  dispatch(loadMovies(res.results.splice(0, 18)));
              });
    };
};

export const loadDataByGenre = (filterObj) => {
    return (dispatch, getState) => {
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
            });
        } else {
            return api.getAllMovies().then((res) => {
                dispatch(loadMovies(res.results.splice(0, 18)));
            });
        }
    };
};

export const loadDataByGenreOrTitle = (filterObj) => {
    return (dispatch, getState) => {
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
                  });
              })
            : api.getAllMovies().then((res) => {
                  dispatch(loadMovies(res.results.splice(0, 18)));
              });
    };
};

export function createUniqueListFromTwoLists(firstList, secondList) {
    return [...new Set(firstList.concat(secondList).map(JSON.stringify))].map(
        JSON.parse
    );
}
