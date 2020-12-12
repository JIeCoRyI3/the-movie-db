import React from 'react';
import PropTypes from 'prop-types';
import styles from './filmCard.module.css';
import { filmCardMock as props } from './filmCardMock';

const FilmCard = () => {
    const { poster_path, title, release_date, genres } = props;
    return (
        <div className={styles[" card "] + styles[" filmCard "]} style="width: 18rem;">
            <img
                src={poster_path}
                className={styles[" card-img-top "] + styles[" filmCard__img "]}
                alt="poster"
            />
            <div className={styles[" card-body "] + styles[" filmCard__body "]}>
                <h5 className={styles[" card-title "] + styles[" filmCard__title "]}>{title}</h5>
                <p className={styles[" card-text "] + styles[" filmCard__year "]}>{release_date}</p>
                <p className={styles[" card-text "] + styles[" filmCard__genresList "]}>
                    {genres.map((item) => (
                        <span key={item} className={styles[" card-text "] + styles[" filmCard__genres "]}>
                            {item}
                        </span>
                    ))}
                </p>
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
