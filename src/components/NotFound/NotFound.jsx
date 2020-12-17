import React from 'react';
import styles from './NotFound.module.css';
import emoji from '../../assets/images/emoji_1.png'

function NotFound() {
    return (
        <div className={styles.container}>
          <h2 className={styles.text}>FILM NOT FOUND</h2>
          <div className={styles.emoji}>
            <img src = {emoji} alt={''}/>
          </div>
        </div>
    );
}

export default NotFound;
