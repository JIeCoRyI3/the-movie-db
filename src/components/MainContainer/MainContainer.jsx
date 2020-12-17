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
import { withRouter } from 'react-router';
import LoaderComponent from '../LoaderComponent';

class MainContainer extends React.Component {
    componentDidMount() {
        this.searchBy = new URLSearchParams(this.props.location.search).get(
            'searchBy'
        );
        this.input = new URLSearchParams(this.props.location.search).get(
            'input'
        );

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
    }

    render() {
        return (
            <main className={styles.mainContainer}>
                {this.props.films && this.props.films.length ? (
                    <FilmsContainer
                        films={this.props.films}
                        genres={this.props.genres}
                    />
                ) : this.props.loading ? (
                    <LoaderComponent />
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

const mapStateToProps = (state) => ({
    films: state.app.moviesList,
    genres: state.app.genresList,
    loading: state.app.loading,
});

const mapDispatchToProps = {
    loadDataByGenre,
    loadDataByTitle,
    loadDataByGenreOrTitle,
};

const withStore = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(withStore(MainContainer));
