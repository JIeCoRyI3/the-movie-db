import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../FilmCardComponent/';

class FilmsContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.films.map((film, index) => (
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
    }
}

FilmsContainer.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object),
};

export { FilmsContainer };
