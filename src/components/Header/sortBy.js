const sortByRating = (props) => {
    return props.byRating ? props.sortByRatingUp() : props.sortByRatingDown();
};

const sortByReleaseDate = (props) => {
    return props.byReleaseDate
        ? props.sortByReleaseDateUp()
        : props.sortByReleaseDateDown();
};

export { sortByRating, sortByReleaseDate };
