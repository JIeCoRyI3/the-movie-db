import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './MainContainer.module.css';

function MainContainer(props) {
    return <main className={styles.mainContainer}>{props.children}</main>;
}

MainContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
};

export { MainContainer };
