
import React from 'react';
import styles from './Loader.module.css';
export function Loader() {
    return (
        <div className={styles.LoaderWrapper}>
            <div className={styles.Loader} />
        </div>
    )
}