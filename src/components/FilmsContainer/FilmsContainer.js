import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../FilmCardComponent/';

const mockFilms = [
    {
        poster_path: '123123.jpg',
        genres: [15, 28],
        release_date: '2020-12-12',
        title: 'TEST',
    },
];

function FilmsContainer() {
    return (
        <>
            1
            {mockFilms.map((film, index) => (
                <FilmCard
                    key={index}
                    poster_path={film.poster_path}
                    genres={film.genres}
                    release_date={film.release_date}
                    title={film.title}
                />
            ))}
        </>
    );
}

FilmsContainer.propTypes = {
    films: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export { FilmsContainer };
