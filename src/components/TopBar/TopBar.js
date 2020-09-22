import React from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
    return (
        <nav className={styles.topNav}>
            <img
                src={process.env.PUBLIC_URL + "assets/logo.svg"}
                width="150px"
                alt="logo"
            />
        </nav>
    )
}

export default TopBar;