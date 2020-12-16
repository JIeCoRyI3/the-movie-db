import React from 'react';
import styles  from './NotFound.module.css';

function NotFound() {
    return <div className={styles.container}>
              <div className={styles.emoji}/>
              <p className={styles.text}>FILM NOT FOUND</p>
           </div>;
}

export default NotFound;



