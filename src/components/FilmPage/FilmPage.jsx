import React from 'react';
import Header from '../Header/';
import MainContainer from '../MainContainer';
import PropTypes from 'prop-types';

function FilmPage(props) {
    console.log(props.match.params);
    return (
        <div className="filmPage">
            <Header>
                <FilmInfo />
            </Header>
            <MainContainer />
        </div>
    );
}

function FilmInfo() {
    return <div>Film`&apos;`s info component!</div>;
}

FilmPage.propTypes = {
    match: PropTypes.object,
};

export { FilmPage };
