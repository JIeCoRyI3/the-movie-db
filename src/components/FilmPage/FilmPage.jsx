import React from 'react';
import Header from '../Header/';
import MainContainer from '../MainContainer';
import PropTypes from 'prop-types';
import CurrentFilmDescription from '../CurrentFilm';

function FilmPage() {
    return (
        <div className="filmPage">
            <Header>
                <CurrentFilmDescription />
            </Header>
            <MainContainer />
        </div>
    );
}

FilmPage.propTypes = {
    match: PropTypes.object,
};

export { FilmPage };
