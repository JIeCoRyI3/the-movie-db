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

class MainContainer extends React.Component {
    state = {
        isAscending: null,
        sortBy: null,
    };

    componentDidMount() {
        const urlGetParams = this.props.location.search;
        const isAscending = new URLSearchParams(urlGetParams).get('sortType');
        const sortBy = new URLSearchParams(urlGetParams).get('sortBy');
        this.searchBy = new URLSearchParams(urlGetParams).get('searchBy');
        this.input = new URLSearchParams(urlGetParams).get('input');
        this.setState({
            isAscending: isAscending,
            sortBy: sortBy,
        });

        const promiseGetMovies = new Promise((resolve) => {
            if (this.searchBy) {
                switch (this.searchBy) {
                    case 'title':
                        this.props.loadDataByTitle({ query: this.input });
                        break;
                    case 'genre':
                        this.props.loadDataByGenre({ with_genres: this.input });
                        break;
                    case 'genreOrTitle':
                        this.props.loadDataByGenreOrTitle({
                            title_and_genres: this.input,
                        });
                        break;
                    default:
                }
            }
            setTimeout(() => {
                resolve('foo');
            }, 300);
        });

        promiseGetMovies.then(() => {
            if (sortBy === 'rating') {
                this.sortByRating();
            }

            if (sortBy === 'date') {
                this.sortByDate();
            }
        });
    }

    sortByDate = () => {
        const props = this.props;
        return this.state.isAscending === 'asc'
            ? props.sortByReleaseDateUp()
            : props.sortByReleaseDateDown();
    };

    sortByRating = () => {
        const props = this.props;
        return this.state.isAscending === 'asc'
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
