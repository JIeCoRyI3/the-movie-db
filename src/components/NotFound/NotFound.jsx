import React from 'react';
import styles from './NotFound.module.css';
import emoji from '../../assets/images/emoji_1.png'

function NotFound() {
    return (
        <div className={styles.container}>
          <div className={styles.text}>
            <h2>FILM NOT FOUND</h2>
          </div>
          <div className={styles.emoji}>
            <img src = {emoji} alt={''}/>
          </div>
        </div>
    );
}

export default NotFound;
