import { loadMovies } from '../../store/actions-creators/loadMovies';
import ApiClient from '../../api/apiClient';

const api = new ApiClient();

export const loadDataByTitle = (filterObj) => {
    return (dispatch) => {
        filterObj.query
            ? api.filterBy(filterObj).then((res) => {
                  dispatch(loadMovies(res.results.splice(0, 18)));
              })
            : api.getAllMovies().then((res) => {
                  dispatch(loadMovies(res.results.splice(0, 18)));
              });
    };
};

export const loadDataByGenre = (filterObj) => {
    return (dispatch) => {
        filterObj.with_genres
            ? api.getAllGenres().then((res) => {
                  const genre = res.genres.find((genre) =>
                      genre.name.includes(filterObj.with_genres)
                  );
                  filterObj.with_genres = !genre ? null : genre.id;

                  api.filterWithGenres(filterObj).then((res) => {
                      dispatch(loadMovies(res.results.splice(0, 18)));
                  });
              })
            : api.getAllMovies().then((res) => {
                  dispatch(loadMovies(res.results.splice(0, 18)));
              });
    };
};

export const loadDataByGenreOrTitle = (filterObj) => {
    return (dispatch) => {
        const filterObjForTitle = {
            query: filterObj.title_and_genres,
        };

        const filterObjForGenre = {
            with_genres: filterObj.title_and_genres,
        };

        filterObj.title_and_genres
            ? api.filterBy(filterObjForTitle).then((resByTitle) => {
                  api.getAllGenres().then((res) => {
                      const genre = res.genres.find((genre) =>
                          genre.name.includes(filterObjForGenre.with_genres)
                      );
                      filterObjForGenre.with_genres = !genre ? null : genre.id;

                      api.filterWithGenres(filterObjForGenre).then(
                          (resByGenre) => {
                              const moviesList = createUniqueListFromTwoLists(
                                  resByTitle.results,
                                  resByGenre.results
                              )
                                  .sort((a, b) => a.id - b.id)
                                  .splice(0, 18);
                              dispatch(loadMovies(moviesList));
                          }
                      );
                  });
              })
            : api.getAllMovies().then((res) => {
                  dispatch(loadMovies(res.results.splice(0, 18)));
              });
    };
};

function createUniqueListFromTwoLists(firstList, secondList) {
    return [...new Set(firstList.concat(secondList).map(JSON.stringify))].map(
        JSON.parse
    );
}
