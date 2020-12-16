import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './CurrentFilmDescription.module.css';
import ApiClient from '../../api/apiClient';

const api = new ApiClient();

export class CurrentFilmDescription extends Component {
    state = {
        filmData: {},
        genres: null,
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        this.getMovie(id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            const id = this.props.match.params.id;
            this.getMovie(id);
        }
    }

    getGenres() {
        const genresArray = this.state.filmData.genres;
        if (genresArray) {
            const genres = genresArray.map((genre) => genre.name);

            this.setState({
                genres: genres.join(', '),
            });
        }
    }

    getMovie = async (id) => {
        try {
            const response = await api.detailsFromFilm(id);

            this.setState({
                filmData: response,
            });

            this.getGenres();
        } catch (error) {
            this.props.history.push(`/`);
        }
    };

    render() {
        const {
            original_title,
            vote_average,
            release_date,
            overview,
            poster_path,
        } = this.state.filmData;

        return (
            <div className={styles.currentFilmContainer}>
                <img
                    className={styles.poster}
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={original_title}
                    title={original_title}
                />
                <div className={styles.detailsContainer}>
                    <div className={styles.titleContainer}>
                        <h4 className={styles.titleFilmName}>
                            {original_title}
                        </h4>
                        <h4 className={styles.ratingFilmName}>
                            {vote_average}
                        </h4>
                    </div>
                    <div>
                        <h5 className={styles.yearFilmName}>{release_date}</h5>
                        <p className={styles.descriptionFilmName}>{overview}</p>
                        <div className={styles.genresContainer}>
                            <p className={styles.genresTitleFilmName}>
                                Genres:
                            </p>
                            <p className={styles.genresFilmName}>
                                {this.state.genres}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CurrentFilmDescription);
