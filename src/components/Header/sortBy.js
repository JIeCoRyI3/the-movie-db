const sortByRating = (props) => {
    return props.byReleaseDate
        ? props.sortByRatingUp()
        : props.sortByRatingDown();
};

const sortByReleaseDate = (props) => {
    return props.byReleaseDate
        ? props.sortByReleaseDateUp()
        : props.sortByReleaseDateDown();
};

export { sortByRating, sortByReleaseDate };
