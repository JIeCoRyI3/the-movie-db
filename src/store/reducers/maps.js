import {
    sortByRatingDown,
    sortByRatingUp,
    sortByReleaseDateUp,
    sortByReleaseDateDown,
} from '../actions-creators/sortBy';

const mapStateToProps = (state) => {
    return {
        currMovie: state.app.currMovie,
        moviesList: state.app.moviesList,
        byRating: state.app.byRating,
        byReleaseDate: state.app.byReleaseDate,
    };
};

const mapDispatchToProps = {
    sortByRatingDown,
    sortByRatingUp,
    sortByReleaseDateUp,
    sortByReleaseDateDown,
};

export { mapStateToProps, mapDispatchToProps };
