import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './CurrentFilmDescription.module.css';

class CurrentFilmDescription extends Component {
    render() {
        console.log(this.props.match.params.id);
        return (
            <div className={styles.currentFilmContainer}>
                <img
                    className={styles.poster}
                    src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg"
                    alt="The Mandalorian"
                    title="The Mandalorian"
                />
                <div className={styles.detailsContainer}>
                    <div className={styles.TitleContainer}>
                        <h4 className={styles.TitleContainerFilmName}>
                            The Mandalorian
                        </h4>
                        <h4>8.5</h4>
                    </div>
                    <div>
                        <h5>2019</h5>
                        <h5>
                            After the fall of the Galactic Empire, lawlessness
                            has spread throughout the galaxy. A lone gunfighter
                            makes his way through the outer reaches, earning his
                            keep as a bounty hunter.
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CurrentFilmDescription);
