import React from 'react';
import styles from './SearchBar.module.css';
import { loadData } from './connect-store';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
    switchByTitle() {
        localStorage.setItem('filter', 'query');
    }

    switchByGenre() {
        localStorage.setItem('filter', 'with_genres');
    }

    search = () => {
        const searchString = document.getElementById('searchInput').value;
        const filter = localStorage.getItem('filter');
        const filterObj = {
            [filter]: searchString,
        };

        this.props.loadData(filterObj);
    };

    render() {
        return (
            <div className={styles.searchBarContainer}>
                <h4 className={styles.title}>Find your movies</h4>
                <input
                    className={styles.input}
                    placeholder="Enter movie title or genre"
                    id="searchInput"
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
                            onClick={this.switchByTitle}
                        >
                            Title
                        </button>
                        <button
                            className={`${styles.leftSideItem} btn btn-primary`}
                            onClick={this.switchByGenre}
                        >
                            Genre
                        </button>
                    </div>
                    <div>
                        <button
                            className="btn btn-primary"
                            onClick={this.search}
                        >
                            SEARCH
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    loadData,
};

const withStore = connect(null, mapDispatchToProps);

export default withStore(SearchBar);
