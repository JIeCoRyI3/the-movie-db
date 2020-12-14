import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilmCard.module.css';
import ApiClient from '../../api/apiClient';

const api = new ApiClient();

class FilmCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: null,
        };
    }

    componentDidMount() {
        this.getGenres(this.props.genres);
    }

    componentDidUpdate() {
        this.getGenres(this.props.genres);
    }

    getGenres = (ids) => {
        api.getAllGenres().then((res) => {
            let genres = '';
            res.genres.map((genre) => {
                if (ids.includes(genre.id)) {
                    genres += genre.name + ' ';
                }
                return genres;
            });
            this.setState({
                genres,
            });
        });
    };

    render() {
        return (
            <div
                className={`card ${styles.filmCard}`}
                style={{ width: 18 + 'rem' }}
            >
                <img
                    src={
                        'https://image.tmdb.org/t/p/w500/' +
                        this.props.poster_path
                    }
                    className={`card-img-top ${styles.filmCardImg}`}
                    alt="poster"
                />
                <div className={`card-body ${styles.filmCardBody}`}>
                    <h5 className={`card-title ${styles.filmCardTitle}`}>
                        {this.props.title}
                    </h5>
                    <p className={`card-text ${styles.filmCardYear}`}>
                        {this.props.release_date}
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
    genres: PropTypes.arrayOf(PropTypes.number).isRequired,
    release_date: PropTypes.string.isRequired,
};

export default FilmCard;
