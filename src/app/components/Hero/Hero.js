import React from 'react';

import styles from './hero.scss';

const Hero = ({reveal}) => {
  const classNames = `${styles.hero} ${reveal ? styles.show : null}`;

  return (
    <div className={classNames}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitleUpper}>Will</h1>
        <h4 className={styles.heroTitleDivider}>at</h4>
        <h2 className={styles.heroTitleLower}>GI's</h2>
        <h3 className={styles.heroTitleAddress}>45 Chapel Ash</h3>
      </div>
    </div>
  );
};

export default Hero;
