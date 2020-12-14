import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import styles from './Header.module.css';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <section className={styles.headerComponent}>
                <header className={styles.header}>
                    <Link
                        to="/"
                        className={`btn btn-primary ${styles.logoHeader}`}
                    >
                        <Logo />
                    </Link>
                    <Route
                        path="/film/:id"
                        render={() => (
                            <Link
                                to="/"
                                className={`btn btn-primary ${styles.goBack}`}
                            >
                                go back
                            </Link>
                        )}
                    />
                </header>
                <div className={styles.headerAdditional}>
                    {this.props.children}
                </div>
                <div className={styles.headerSortBlock}>
                    <p className={styles.sortBlockTitle}>Sort by: </p>
                    <button className={`btn btn-primary ${styles.sortRating}`}>
                        rating
                    </button>
                    <button className={`btn btn-primary ${styles.sortRelease}`}>
                        release date
                    </button>
                </div>
            </section>
        );
    }
}

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.node,
    ]),
    match: PropTypes.object,
};

const mapStateToProps = (state) => ({
    films: state.app.moviesList,
});

const withStore = connect(mapStateToProps);

export default withStore(Header);
