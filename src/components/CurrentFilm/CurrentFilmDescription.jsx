import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './CurrentFilmDescription.module.css';
import ApiClient from '../../api/apiClient';
import { formatDate } from '../../utils/utils';
import placeholder from "../../assets/images/placeholder.png";

const api = new ApiClient();

export class CurrentFilmDescription extends Component {
    state = {
        filmData: {},
        genres: null,
        isPosterLoad: true,
    };

    async componentDidMount() {
        const id = this.props.match.params.id;

        await this.getMovie(id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            const id = this.props.match.params.id;
            this.getMovie(id);
        }
    }

    getGenres(filmData) {
        const genresArray = filmData.genres;
        if (genresArray) {
            const genres = genresArray.map((genre) => genre.name);

            this.setState({
                filmData,
                genres: genres.join(', '),
            });
        }
    }

    getMovie = async (id) => {
        try {
            const response = await api.detailsFromFilm(id);

            this.getGenres(response);
        } catch (error) {
            this.props.history.push(`/`);
        }
    };

    getDate = () => {
        const date = this.state.filmData.release_date;
        if (date) {
            return formatDate(date);
        }
    };

    errorPosterHandler = () => {
        this.setState({
            isPosterLoad: false,
        });
    }

    render() {
        const {
            original_title,
            vote_average,
            overview,
            poster_path,
        } = this.state.filmData;

        return (
            <div className={styles.currentFilmContainer}>
                <img
                    className={styles.poster}
                    // src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={original_title}
                    title={original_title}

                    onError={ this.errorPosterHandler }
                    src={this.state.isPosterLoad ? `https://image.tmdb.org/t/p/w500/${poster_path}` : placeholder}


                />
                <div className={styles.detailsContainer}>
                    <div className={styles.titleContainer}>
                        <h4 className={styles.titleFilmName}>
                            {original_title}
                        </h4>
                        <div className={styles.ratingFilmNameWrap}>
                            <h4 className={styles.ratingFilmName}>
                                {vote_average}
                            </h4>
                        </div>
                    </div>
                    <div className={styles.dateDescriptionGenre}>
                        <h5 className={styles.yearFilmName}>
                            {this.getDate()}
                        </h5>
                        <div className={styles.descriptionGenre}>
                            <p className={styles.descriptionFilmName}>
                                {overview}
                            </p>
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
            </div>
        );
    }
}

export default withRouter(CurrentFilmDescription);
