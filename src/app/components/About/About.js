import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './about.scss';
import url from '../../../img/will-headshot.jpg';

const cx = classNames.bind(styles);

const About = ({ reveal }) => {
  const classNames = cx('about', {show: reveal});

  return (
    <div className={classNames}>
      <h6 className={styles.title}>About</h6>
      <p className={styles.copy}>
        Will is an award-winning Barber based in Wolverhampton.
      </p>
      <p className={styles.copy}>
        He is dedicated to providing an exemplary service to his customers
      </p>
      <p className={styles.copy}>
        Please contact Will for appointments.
      </p>
      <img src={url} className={styles.image}/>
    </div>
  );
};

About.propTypes = {
  reveal: PropTypes.bool
};

export default About;
