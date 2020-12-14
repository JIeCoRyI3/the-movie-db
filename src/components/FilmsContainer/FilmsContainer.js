import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../FilmCardComponent/';

const FilmsContainer = (props) => (
    <>
        {props.films.map((film, index) => (
            <FilmCard
                key={index}
                poster_path={film.poster_path}
                genres={film.genre_ids}
                release_date={film.release_date}
                title={film.title}
            />
        ))}
    </>
);

FilmsContainer.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape),
};

export { FilmsContainer };
