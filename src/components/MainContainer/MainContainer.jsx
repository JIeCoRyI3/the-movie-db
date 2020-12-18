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
import { getSearchParams } from '../../utils/utils';
import LoaderComponent from '../LoaderComponent';

class MainContainer extends React.Component {
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

    render() {
        if (this.props.loading) {
            return <LoaderComponent />;
        }

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
