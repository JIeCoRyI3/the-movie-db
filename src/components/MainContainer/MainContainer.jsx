import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.css';
import FilmsContainer from '../FilmsContainer/';
// import NotFound from '../NotFound';

function MainContainer(props) {
    return (
        <main className={styles.mainContainer}>
            {props.films ? <FilmsContainer films={props.films} /> : null}
        </main>
    );
}

MainContainer.propTypes = {
    // films: PropTypes.oneOfType([
    //     PropTypes.arrayOf(PropTypes.object),
    //     PropTypes.node,
    // ]),
    films: PropTypes.arrayOf(PropTypes.object),
};

export { MainContainer };
