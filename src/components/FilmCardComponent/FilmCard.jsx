import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styles from './FilmCard.module.css';
import ApiClient from '../../api/apiClient';
import { formatDate } from '../../utils/utils';
import placeholder from '../../assets/images/placeholder.png';

const api = new ApiClient();

class FilmCard extends React.PureComponent {
    state = {
        genres: null,
        isPosterLoad: true,
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
        api.getAllGenres().then((res) => {
            const genres = res.genres
                .filter((genre) => ids.includes(genre.id))
                .map((genre) => genre.name);
            genres.length = (genres.length > 3)? 3 : genres.length;
            this.setState({
                genres: genres.join(', '),
            });
        });
    };

    handleRoute = () => {
        if (this.props.id) {
            this.props.history.push(`/film/${this.props.id}`);
        }
    };

    errorPosterHandler = () => {
        this.setState({
            isPosterLoad: false,
        });
    }

    render() {
        return (
            <div
                onClick={this.handleRoute}
                className={`card ${styles.filmCard}`}
                style={{ width: 18 + 'rem' }}
            >
                <div className={styles.filmCardImgWrap}>
                    <img
                      onError={ this.errorPosterHandler }
                      src={this.state.isPosterLoad ? `https://image.tmdb.org/t/p/w500/${this.props.poster_path}` : placeholder}
                      className={`card-img-top ${styles.filmCardImg}`}
                      alt={'Poster'}
                    />
                </div>

                <div className={`card-body ${styles.filmCardBody}`}>
                    <div className={styles.filmCardTitleWrap}>
                        <h5 className={`card-title ${styles.filmCardTitle}`}>
                            {this.props.original_title}
                        </h5>
                    </div>
                    <p className={`card-text ${styles.filmCardYear}`}>
                        {formatDate(this.props.release_date)}
                    </p>
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
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(FilmCard);
