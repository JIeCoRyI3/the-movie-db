import React from 'react';
import styles from './LoaderComponent.module.css';

function LoaderComponent() {
    return (
        <div className={styles.ldsDualRingParent}>
            <div className={styles.ldsDualRing} id="req" />
        </div>
    );
}

export default LoaderComponent;
