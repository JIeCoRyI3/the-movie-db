import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilmCard.module.css';

const FilmCard = (props) => {
    return (
        <div
            className={`card ${styles.filmCard}`}
            style={{ width: 18 + 'rem' }}
        >
            <img
                src={'poster_path'}
                className={`card-img-top ${styles.filmCardImg}`}
                alt="poster"
            />
            <div className={`card-body ${styles.filmCardBody}`}>
                <h5 className={`card-title ${styles.filmCardTitle}`}>
                    {props.title}
                </h5>
                <p className={`card-text ${styles.filmCardYear}`}>
                    {props.release_date}
                </p>
                <p className={`card-text ${styles.filmCardGenresList}`}></p>
            </div>
        </div>
    );
};

FilmCard.propTypes = {
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    release_date: PropTypes.string.isRequired,
};

export default FilmCard;