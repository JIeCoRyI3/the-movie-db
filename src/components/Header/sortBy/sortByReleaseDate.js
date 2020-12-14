const sortByReleaseDate = (props) => {
    if (props.byReleaseDate === false) {
        props.sortByReleaseDateDown();
    }

    if (props.byReleaseDate === true) {
        props.sortByReleaseDateUp();
    }
};

export default sortByReleaseDate;
