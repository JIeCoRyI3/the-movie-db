import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './CurrentFilmDescription.module.css';
import ApiClient from '../../api/apiClient';

const api = new ApiClient();

class CurrentFilmDescription extends Component {
    state = {
        title: null,
        rating: null,
        date: null,
        description: null,
        poster: null,
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        this.getMovie(id);
    }

    getMovie = (id) => {
        api.detailsFromFilm(id).then((data) => {
            this.setState({
                title: data.original_title,
                rating: data.vote_average,
                date: data.release_date,
                description: data.overview,
                poster: data.poster_path,
            });
        });
    };

    render() {
        return (
            <div className={styles.currentFilmContainer}>
                <img
                    className={styles.poster}
                    src={`https://image.tmdb.org/t/p/w500/${this.state.poster}`}
                    alt={this.state.title}
                    title={this.state.title}
                />
                <div className={styles.detailsContainer}>
                    <div className={styles.TitleContainer}>
                        <h4 className={styles.TitleContainerFilmName}>
                            {this.state.title}
                        </h4>
                        <h4>{this.state.rating}</h4>
                    </div>
                    <div>
                        <h5>{this.state.date}</h5>
                        <h5>{this.state.description}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CurrentFilmDescription);
