import React from 'react';

import styles from './contact.scss';

const Hero = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContent}>
        <h6 className={styles.contactTitle}>contact</h6>
        <h4 className={styles.contactSubTitle}>phone</h4>
        <p>01902 424846</p>
      </div>
    </div>
  );
};

export default Hero;
