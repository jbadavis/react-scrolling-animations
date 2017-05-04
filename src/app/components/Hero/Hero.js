import React from 'react';
import ContactDetails from '../ContactDetails/ContactDetails'
import styles from './hero.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Will</h1>
        <h4 className={styles.heroTitleDivider}>at</h4>
        <h2 className={styles.heroTitleLower}>GI's</h2>
        <h3>45 Chapel Ash</h3>
        <ContactDetails />
      </div>
    </div>
  );
};

export default Hero;
