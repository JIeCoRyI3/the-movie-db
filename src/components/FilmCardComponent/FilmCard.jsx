import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styles from './FilmCard.module.css';
import { formatDate } from '../../utils/utils';
import placeholder from '../../assets/images/placeholder.png';
import { getSearchParams } from '../../utils/utils';

export class FilmCard extends React.PureComponent {
    state = {
        genres: null,
        isPosterLoad: true,
    };

    componentDidMount() {
        this.setState({
            isPosterLoad: true,
        });
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

            for (let key in urlParams) {
                if (key) {
                    arrayOfParams.push(`${key}=${urlParams[key]}`);
                }
            }

            const getParams = arrayOfParams.join('&');
            this.props.history.push(`/film/${this.props.id}?${getParams}`);
            this.scrollToCurrentFilm();
        }
    };

    errorPosterHandler = () => {
        this.setState({
            isPosterLoad: false,
        });
    };

    scrollToCurrentFilm = () => {
        document.documentElement.scrollTop = 0;
    };

    render() {
        return (
            <div
                id="filmCardContainer"
                onClick={this.handleRoute}
                className={`card ${styles.filmCard}`}
                style={{ width: 18 + 'rem' }}
            >
                <div className={styles.filmCardImgWrap}>
                    <img
                        onError={this.errorPosterHandler}
                        src={
                            this.state.isPosterLoad
                                ? `https://image.tmdb.org/t/p/w500/${this.props.poster_path}`
                                : placeholder
                        }
                        className={`card-img-top ${styles.filmCardImg}`}
                        alt={'Poster'}
                        id="filmCardImg"
                    />
                </div>

                <div className={`card-body ${styles.filmCardBody}`}>
                    <div className={styles.filmCardTitleWrap}>
                        <h5
                            className={`card-title ${styles.filmCardTitle}`}
                            id="filmCardTitle"
                        >
                            {this.props.title}
                        </h5>
                    </div>
                    {!!this.props.release_date &&
                    formatDate(this.props.release_date) ? (
                        <p
                            className={`card-text ${styles.filmCardYear}`}
                            id="filmCardYear"
                        >
                            {formatDate(this.props.release_date)}
                        </p>
                    ) : null}
                    <p
                        className={`card-text ${styles.filmCardGenresList}`}
                        id="filmCardGenresList"
                    >
                        {this.state.genres}
                    </p>
                </div>
            </div>
        );
    }
}

FilmCard.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    genres: PropTypes.arrayOf(PropTypes.object),
};

export default withRouter(FilmCard);
