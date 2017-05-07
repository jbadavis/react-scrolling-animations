import React from 'react';

import styles from './about.scss';
import url from '../../../images/will-headshot.jpg';

const About = () => {
  return (
    <div className={styles.about}>
      <h6 className={styles.aboutTitle}>About</h6>
      <p className={styles.aboutP}>Will is an award-winning Barber based in Wolverhampton.</p>
      <p className={styles.aboutP}>He is dedicated to providing exemplary service to his customers</p>
      <p className={styles.aboutP}>Please contact Will for appointments.</p>
      <img src={url} className={styles.aboutImage}/>
    </div>
  );
};

export default About;
