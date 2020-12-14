const sortByRating = (props) => {
    if (props.byRating === false) {
        props.sortByRatingDown();
    }

    if (props.byRating === true) {
        props.sortByRatingUp();
    }
};

export default sortByRating;
