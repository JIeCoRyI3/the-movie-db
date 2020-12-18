import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reducers/maps';
import { getSearchParams } from '../../utils/utils';

export class Header extends Component {
    state = {
        arrow: '',
    };

    componentDidMount = () => {
        const urlParams = getSearchParams(this.props.location.search);
        if (urlParams.sortType === 'asc') {
            this.setState({
                arrow: '˄',
            });
        }
        if (urlParams.sortType === 'desc') {
            this.setState({
                arrow: '˅',
            });
        }
    };

    sortByRating = () => {
        const props = this.props;
        const sortBy = 'rating';
        if (props.byRating) {
            props.sortByRatingUp();
            this.ascendingOrDescendingSymbol(sortBy);
            this.pushGetParameters(sortBy, 'asc');
        } else {
            props.sortByRatingDown();
            this.ascendingOrDescendingSymbol(sortBy);
            this.pushGetParameters(sortBy, 'desc');
        }
    };

    sortByDate = () => {
        const props = this.props;
        const sortBy = 'date';
        if (props.byReleaseDate) {
            props.sortByReleaseDateUp();
            this.ascendingOrDescendingSymbol(sortBy);
            this.pushGetParameters(sortBy, 'asc');
        } else {
            props.sortByReleaseDateDown();
            this.ascendingOrDescendingSymbol(sortBy);
            this.pushGetParameters(sortBy, 'desc');
        }
    };

    ascendingOrDescendingSymbol = (sortBy) => {
        let arrow;
        if (sortBy === 'date') {
            arrow = this.props.byReleaseDate ? '˄' : '˅';
        } else {
            arrow = this.props.byRating ? '˄' : '˅';
        }
        this.setState({
            arrow: arrow,
        });
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

    render = () => {
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
                    <p
                        className={styles.sortBlockTitle}
                    >{`${this.state.arrow} Sort by:`}</p>
                    <button
                        id="rating"
                        onClick={this.sortByRating}
                        className={`btn btn-primary ${styles.sortRating}`}
                    >
                        {`rating`}
                    </button>
                    <button
                        id="releaseDate"
                        onClick={this.sortByDate}
                        className={`btn btn-primary ${styles.sortRelease}`}
                    >
                        {`release date`}
                    </button>
                </div>
            </section>
        );
    };
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
