import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <div className={styles.searchBarContainer}>
            <h4 className={styles.title}>Find your movies</h4>
            <input
                className={styles.input}
                placeholder="Enter movie title or genre"
            />
            <div className={styles.filterBarContainer}>
                <div className={styles.leftSide}>
                    <h5
                        className={styles.searchTitle}
                    >
                        Search by
                    </h5>
                    <button
                        className={`btn btn-primary ${styles.leftSideItem}`}
                    >
                        Title
                    </button>
                    <button
                        className={`btn btn-primary ${styles.leftSideItem}`}
                    >
                        Genre
                    </button>
                </div>
                <div>
                    <button className={`btn btn-primary ${styles.rightSideItem}`}>SEARCH</button>
                </div>
            </div>
        </div>
    );
}
