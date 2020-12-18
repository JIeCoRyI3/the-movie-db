import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../FilmCardComponent/';

const FilmsContainer = (props) =>
    props.films.map((film) => (
        <FilmCard key={film.id} {...film} genres={props.genres} />
    ));

FilmsContainer.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            poster_path: PropTypes.string,
            genres_ids: PropTypes.arrayOf(PropTypes.number),
            release_date: PropTypes.string,
            title: PropTypes.string.isRequired,
        })
    ),
};

export { FilmsContainer };
