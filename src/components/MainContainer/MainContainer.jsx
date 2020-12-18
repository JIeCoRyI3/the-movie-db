import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.css';
import FilmsContainer from '../FilmsContainer/';
import { connect } from 'react-redux';
import NotFound from '../NotFound';
import {
    loadDataByTitle,
    loadDataByGenreOrTitle,
    loadDataByGenre,
} from '../SearchBar/connect-store';
import {
    sortByRatingDown,
    sortByRatingUp,
    sortByReleaseDateUp,
    sortByReleaseDateDown,
} from '../../store/actions-creators/sortBy';
import { withRouter } from 'react-router';
import { mapStateToProps } from '../../store/reducers/maps';
import { getSearchParams } from '../../utils/utils';

class MainContainer extends React.Component {
    state = {
        isAscending: null,
        sortBy: null,
        sorted: false,
    };

    componentDidUpdate = () => {
        if (this.props.films && !this.state.sorted) {
            this.setState({
                sorted: true,
            });
            const urlParams = getSearchParams(this.props.location.search);
            if (urlParams.sortBy === 'rating') {
                this.sortByRating();
            }

            if (urlParams.sortBy === 'date') {
                this.sortByDate();
            }
        }
    };

    componentDidMount() {
        const urlParams = getSearchParams(this.props.location.search);

        if (urlParams.searchBy) {
            switch (urlParams.searchBy) {
                case 'title':
                    this.props.loadDataByTitle({ query: urlParams.input });
                    break;
                case 'genre':
                    this.props.loadDataByGenre({
                        with_genres: urlParams.input,
                    });
                    break;
                case 'genreOrTitle':
                    this.props.loadDataByGenreOrTitle({
                        title_and_genres: urlParams.input,
                    });
                    break;
                default:
            }
        }
    }

    sortByDate = () => {
        const props = this.props;
        const urlParams = getSearchParams(this.props.location.search);
        return urlParams.sortType === 'asc'
            ? props.sortByReleaseDateUp()
            : props.sortByReleaseDateDown();
    };

    sortByRating = () => {
        const props = this.props;
        const urlParams = getSearchParams(this.props.location.search);
        return urlParams.sortType === 'asc'
            ? props.sortByRatingUp()
            : props.sortByRatingDown();
    };

    render() {
        return (
            <main className={styles.mainContainer}>
                {this.props.films && this.props.films.length ? (
                    <FilmsContainer
                        films={this.props.films}
                        genres={this.props.genres}
                    />
                ) : (
                    <NotFound />
                )}
            </main>
        );
    }
}

MainContainer.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            poster_path: PropTypes.string,
            genres_ids: PropTypes.arrayOf(PropTypes.number),
            release_date: PropTypes.string,
            title: PropTypes.string.isRequired,
        })
    ),
};

const mapDispatchToProps = {
    loadDataByGenre,
    loadDataByTitle,
    loadDataByGenreOrTitle,
    sortByRatingDown,
    sortByRatingUp,
    sortByReleaseDateUp,
    sortByReleaseDateDown,
};

const withStore = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(withStore(MainContainer));
