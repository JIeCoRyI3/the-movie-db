import React from 'react';
import PropTypes from 'prop-types';
import './filmCard.css';
import { filmCardMock as props } from './filmCardMock';

const FilmCard = () => {
    const { poster_path, title, release_date, genres } = props;
    return (
        <div className="card filmCard" style="width: 18rem;">
            <img
                src={poster_path}
                className="card-img-top filmCard__img"
                alt="poster"
            />
            <div className="card-body filmCard__body">
                <h5 className="card-title filmCard__title">{title}</h5>
                <p className="card-text filmCard__year">{release_date}</p>
                <p className="card-text filmCard__genresList">
                    {genres.map((item) => (
                        <span key={item} className="card-text filmCard__genres">
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
