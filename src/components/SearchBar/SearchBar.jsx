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
            <div className={styles.underInput}>
                <div className={styles.leftSide}>
                    <h5
                        className={
                            styles.leftSideItem + ' ' + styles.searchTitle
                        }
                    >
                        Search by
                    </h5>
                    <button
                        className={styles.leftSideItem + ' btn btn-primary'}
                    >
                        Title
                    </button>
                    <button
                        className={styles.leftSideItem + ' btn btn-primary'}
                    >
                        Genre
                    </button>
                </div>
                <div>
                    <button className="btn btn-primary">SEARCH</button>
                </div>
            </div>
        </div>
    );
}
