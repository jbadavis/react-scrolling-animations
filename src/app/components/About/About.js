import React from 'react';

import styles from './about.scss';
import url from '../../../img/will-headshot.jpg';

const About = ({reveal}) => {
  const classNames = `${styles.about} ${reveal ? styles.show : null}`;

  return (
    <div className={classNames}>
      <h6 className={styles.aboutTitle}>About</h6>
      <p className={styles.aboutP}>Will is an award-winning Barber based in Wolverhampton.</p>
      <p className={styles.aboutP}>He is dedicated to providing an exemplary service to his customers</p>
      <p className={styles.aboutP}>Please contact Will for appointments.</p>
      <img src={url} className={styles.aboutImage}/>
    </div>
  );
};

export default About;
