import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import styles from './scrollDown.scss';

const ScrollDown = () => {
  return (
    <CSSTransitionGroup
      transitionName={styles}
      transitionAppear={true}
      transitionAppearTimeout={2400}
      transitionEnter={false}
      transitionLeave={false}>
      <h5 className={styles.scrollDown}>Scroll Down</h5>
    </CSSTransitionGroup>
  );
};

export default ScrollDown;
