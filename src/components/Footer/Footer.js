import React from 'react';
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>
                <FontAwesomeIcon icon={faFacebookF}/>
            </span>
            <span>
                <FontAwesomeIcon icon={faTwitter}/>
            </span>
            <span style={{marginRight: 0}}>
                <FontAwesomeIcon icon={faInstagram}/>
            </span>
        </footer>
    )
}

export default Footer;