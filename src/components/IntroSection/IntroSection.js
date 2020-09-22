import React from 'react';
import styles from './IntroSection.module.css';

const IntroSection = () => {
    return (
        <div className={styles.container}>
            <img
                src={process.env.PUBLIC_URL + '/assets/illustration-mockups.svg'} 
                alt="illustration"
            />
            <div className={styles.textContainer}>
                <header className={styles.header}>
                    Build The Community <br/>
                    Your Fans Will Love
                </header>
                <p>
                    Huddle re-imagines the way we build communities, you have a voice, but so does your audience. 
                    Create connections with your users as you engage in genuine discussions.
                </p>
                <button className={styles.registerButton}>Register</button>
            </div>
        </div>
    );
}

export default IntroSection;