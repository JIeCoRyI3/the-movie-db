import {
    sortByRatingDown,
    sortByRatingUp,
    sortByReleaseDateUp,
    sortByReleaseDateDown,
} from '../actions-creators/sortBy';

const mapStateToProps = (state) => ({
    currMovie: state.app.currMovie,
    moviesList: state.app.moviesList,
    byRating: state.app.byRating,
    byReleaseDate: state.app.byReleaseDate,
    films: state.app.moviesList,
    genres: state.app.genresList,
});

const mapDispatchToProps = {
    sortByRatingDown,
    sortByRatingUp,
    sortByReleaseDateUp,
    sortByReleaseDateDown,
};

export { mapStateToProps, mapDispatchToProps };
