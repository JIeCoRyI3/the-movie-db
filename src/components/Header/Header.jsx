import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import styles from './Header.module.css';

function Header(props) {
    console.log(props);
    return (
        <section className={styles.headerComponent}>
            <header className={styles.header}>
                <Link to="/" className={'btn btn-primary'}>
                    <Logo />
                </Link>
                <Route
                    path="/film/:id"
                    render={() => (
                        <Link
                            to="/"
                            className={`${styles.goBack} btn btn-primary`}
                        >
                            go back
                        </Link>
                    )}
                />
            </header>
            <div className={styles.headerAdditional}>{props.children}</div>
        </section>
    );
}
Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.node,
    ]),
    match: PropTypes.object,
};

export { Header };
