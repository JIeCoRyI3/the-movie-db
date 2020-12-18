import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reducers/maps';

export class Header extends Component {
    sortByRating = () => {
        const props = this.props;
        return props.byRating
            ? props.sortByRatingUp()
            : props.sortByRatingDown();
    };

    sortByReleaseDate = () => {
        const props = this.props;
        return props.byReleaseDate
            ? props.sortByReleaseDateUp()
            : props.sortByReleaseDateDown();
    };

    render() {
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
                                to={`/${this.props.location.search}`}
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
                    <button
                        id="rating"
                        onClick={this.sortByRating}
                        className={`btn btn-primary ${styles.sortRating}`}
                    >
                        rating
                    </button>
                    <button
                        id="releaseDate"
                        onClick={this.sortByReleaseDate}
                        className={`btn btn-primary ${styles.sortRelease}`}
                    >
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

const withStore = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(withStore(Header));
