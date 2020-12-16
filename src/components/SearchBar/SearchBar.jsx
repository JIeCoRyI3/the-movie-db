import React from 'react';
import styles from './SearchBar.module.css';
import {
    loadDataByGenre,
    loadDataByTitle,
    loadDataByGenreOrTitle,
} from './connect-store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class SearchBar extends React.Component {
    state = {
        value: '',
    };

    searchByTitle = () => {
        this.pushGetParameters('query');
        this.props.loadDataByTitle(this.getUserInput('query'));
    };

    searchByGenre = () => {
        this.pushGetParameters('with_genres');
        this.props.loadDataByGenre(this.getUserInput('with_genres'));
    };

    searchByGenreOrTitle = () => {
        this.pushGetParameters('title_and_genres');
        this.props.loadDataByGenreOrTitle(
            this.getUserInput('title_and_genres')
        );
    };

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            value,
        });
    };

    getUserInput = (searchBy) => {
        return {
            [searchBy]: this.state.value,
        };
    };

    pushGetParameters = (searchBy) => {
        const userInput = this.getUserInput(searchBy);
        const pushObj = {
            pathname: '/',
        };

        switch (searchBy) {
            case 'query':
                pushObj.search = `?searchBy=title${
                    userInput.query ? '&input=' + userInput.query : ''
                }`;
                break;
            case 'with_genres':
                pushObj.search = `?searchBy=genre${
                    userInput.with_genres
                        ? '&input=' + userInput.with_genres
                        : ''
                }`;
                break;
            case 'title_and_genres':
                pushObj.search = `?searchBy=genreOrTitle${
                    userInput.title_and_genres
                        ? '&input=' + userInput.title_and_genres
                        : ''
                }`;
                break;
            default:
                pushObj.search = `?searchBy=title${
                    userInput.query ? '&input=' + userInput.query : ''
                }`;
        }

        this.props.history.push(pushObj);
    };

    render() {
        return (
            <div className={styles.searchBarContainer}>
                <h4 className={styles.title}>Find your movies</h4>
                <input
                    className={styles.input}
                    placeholder="Enter movie title or genre"
                    id="searchInput"
                    onChange={this.handleChange}
                />
                <div className={styles.filterBarContainer}>
                    <div className={styles.leftSide}>
                        <h5
                            className={`${styles.leftSideItem} ${styles.searchTitle}`}
                        >
                            Search by
                        </h5>
                        <button
                            className={`${styles.leftSideItem} btn btn-primary`}
                            onClick={this.searchByTitle}
                            id="title"
                        >
                            Title
                        </button>
                        <button
                            className={`${styles.leftSideItem} btn btn-primary`}
                            onClick={this.searchByGenre}
                            id="genre"
                        >
                            Genre
                        </button>
                    </div>
                    <div>
                        <button
                            className={`btn btn-primary ${styles.rightSideItem}`}
                            onClick={this.searchByGenreOrTitle}
                            id="search"
                        >
                            SEARCH
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

SearchBar.displayName = 'SearchBar';

const mapDispatchToProps = {
    loadDataByGenre,
    loadDataByTitle,
    loadDataByGenreOrTitle,
};

const withStore = connect(null, mapDispatchToProps);

export default withRouter(withStore(SearchBar));
