import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './hero.scss';

const cx = classNames.bind(styles);

const Hero = ({ reveal }) => {
  const classNames = cx('hero', {show: reveal});

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

Hero.propTypes = {
  reveal: PropTypes.bool
};

export default Hero;
