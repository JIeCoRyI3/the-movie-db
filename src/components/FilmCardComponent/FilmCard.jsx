import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styles from './FilmCard.module.css';
import { formatDate } from '../../utils/utils';
import { getSearchParams } from '../../utils/utils';

class FilmCard extends React.Component {
    state = {
        genres: null,
    };

    componentDidMount() {
        this.getGenres(this.props.genre_ids);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.genres !== this.props.genres) {
            this.getGenres(this.props.genres);
        }
    }

    getGenres = (ids) => {
        const genres = this.props.genres
            .filter((genre) => ids.includes(genre.id))
            .map((genre) => genre.name);

        this.setState({
            genres: genres.join(', '),
        });
    };

    handleRoute = () => {
        if (this.props.id) {
            const urlParams = getSearchParams(this.props.location.search);
            const arrayOfParams = [];

            if (urlParams.searchBy) {
                arrayOfParams.push(`searchBy=${urlParams.searchBy}`);
            }
            if (urlParams.input) {
                arrayOfParams.push(`input=${urlParams.input}`);
            }
            if (urlParams.sortBy) {
                arrayOfParams.push(`sortBy=${urlParams.sortBy}`);
            }
            if (urlParams.sortType) {
                arrayOfParams.push(`sortType=${urlParams.sortType}`);
            }

            const getParams = arrayOfParams.join('&');
            this.props.history.push(`/film/${this.props.id}?${getParams}`);
            this.scrollToCurrentFilm();
        }
    };

    scrollToCurrentFilm = () => {
        document.documentElement.scrollTop = 0;
    };

    render() {
        return (
            <div
                onClick={this.handleRoute}
                className={`card ${styles.filmCard}`}
                style={{ width: 18 + 'rem' }}
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`}
                    className={`card-img-top ${styles.filmCardImg}`}
                    alt="poster"
                />
                <div className={`card-body ${styles.filmCardBody}`}>
                    <h5 className={`card-title ${styles.filmCardTitle}`}>
                        {this.props.original_title}
                    </h5>

                    {!!this.props.release_date &&
                    formatDate(this.props.release_date) ? (
                        <p className={`card-text ${styles.filmCardYear}`}>
                            {formatDate(this.props.release_date)}
                        </p>
                    ) : null}

                    <p className={`card-text ${styles.filmCardGenresList}`}>
                        {this.state.genres}
                    </p>
                </div>
            </div>
        );
    }
}

FilmCard.propTypes = {
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
};

export default withRouter(FilmCard);
