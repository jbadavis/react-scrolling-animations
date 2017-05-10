import React from 'react';

import styles from './hero.scss';

const Hero = ({reveal}) => {
  const classNames = `${styles.hero} ${reveal ? styles.show : null}`;

  return (
    <div className={classNames}>
      <div className={styles.content}>
        <h1 className={styles.titleUpper}>Will</h1>
        <h4 className={styles.titleDivider}>at</h4>
        <h2 className={styles.titleLower}>GI's</h2>
        <h3 className={styles.titleAddress}>45 Chapel Ash</h3>
      </div>
    </div>
  );
};

export default Hero;
