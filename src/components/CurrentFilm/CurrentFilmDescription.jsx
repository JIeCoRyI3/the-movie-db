import React from 'react';
import styles from './CurrentFilmDescription.module.css';

export default function CurrentFilmDescription() {
    return (
        <div className={styles.currentFilmContainer}>
            <img
                className={styles.poster}
                src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg"
                alt="what's wrong"
            />
            <div className={styles.detailsContainer}>
                <div className={styles.detailsContainerTitleContainer}>
                    <h4 className={styles.detailsContainerTitleContainerTitle}>
                        The Mandalorian
                    </h4>
                    <h4>8.5</h4>
                </div>
                <div>
                    <h5>2019</h5>
                    <h5>
                        After the fall of the Galactic Empire, lawlessness has
                        spread throughout the galaxy. A lone gunfighter makes
                        his way through the outer reaches, earning his keep as a
                        bounty hunter.
                    </h5>
                </div>
            </div>
        </div>
    );
}
