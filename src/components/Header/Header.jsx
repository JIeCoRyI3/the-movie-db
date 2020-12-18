import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reducers/maps';
import getSearchParams from '../../utils/getSearchParams';

export class Header extends Component {
    componentDidMount = () => {
        const a = getSearchParams(this.props.location.search);
        console.log(a);
    };

    sortByRating = () => {
        const props = this.props;
        if (props.byRating) {
            props.sortByRatingUp();
            this.pushGetParameters('rating', 'asc');
        } else {
            props.sortByRatingDown();
            this.pushGetParameters('rating', 'desc');
        }
    };

    sortByDate = () => {
        const props = this.props;
        if (props.byReleaseDate) {
            props.sortByReleaseDateUp();
            this.pushGetParameters('date', 'asc');
        } else {
            props.sortByReleaseDateDown();
            this.pushGetParameters('date', 'desc');
        }
    };

    pushGetParameters = (sortBy, sortType) => {
        const arrayOfParams = [];
        const params = getSearchParams(this.props.location.search);

        if (params.searchBy) {
            arrayOfParams.push(`searchBy=${params.searchBy}`);
        }
        if (params.input) {
            arrayOfParams.push(`input=${params.input}`);
        }
        arrayOfParams.push(`sortBy=${sortBy}`);
        arrayOfParams.push(`sortType=${sortType}`);

        const getParams = arrayOfParams.join('&');

        this.props.history.push(`?${getParams}`);
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
                    <button
                        id="rating"
                        onClick={this.sortByRating}
                        className={`btn btn-primary ${styles.sortRating}`}
                    >
                        rating
                    </button>
                    <button
                        id="releaseDate"
                        onClick={this.sortByDate}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
