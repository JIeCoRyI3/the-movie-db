import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.css';

function MainContainer(props) {
    return <main className={styles.mainContainer}>{props.children}</main>;
}

MainContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export { MainContainer };
