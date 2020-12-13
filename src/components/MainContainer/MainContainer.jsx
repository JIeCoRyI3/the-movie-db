import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.css';
import FilmsContainer from '../FilmsContainer/';

function MainContainer(props) {
    return (
        <main className={styles.mainContainer}>
            {props.films ? <FilmsContainer films={props.films} /> : null}
        </main>
    );
}

MainContainer.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object),
};

export { MainContainer };
