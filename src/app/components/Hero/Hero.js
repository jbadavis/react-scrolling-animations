import React from 'react';
import Contact from '../Contact/Contact'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import styles from './hero.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <CSSTransitionGroup
          transitionName={styles}
          transitionAppear={true}
          transitionAppearTimeout={2400}
          transitionEnter={false}
          transitionLeave={false}>
          <h1 className={styles.heroTitleUpper}>Will</h1>
          <h4 className={styles.heroTitleDivider}>at</h4>
          <h2 className={styles.heroTitleLower}>GI's</h2>
          <h3 className={styles.heroTitleAddress}>45 Chapel Ash</h3>
        </CSSTransitionGroup>
      </div>
      <Contact />
    </div>
  );
};


export default Hero;
