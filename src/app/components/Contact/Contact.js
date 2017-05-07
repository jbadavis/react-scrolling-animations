import React from 'react';

import styles from './contact.scss';
import url from '../../../img/instagram.svg';

const Hero = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContent}>
        <h6 className={styles.contactTitle}>contact</h6>
        <h4 className={styles.contactSubTitle}>phone</h4>
        <a href='tel:+441902424846'>01902 424846</a>
        <h4 className={styles.contactSubTitle}>address</h4>
        <a href='https://goo.gl/maps/HXnx5EAekUP2' target='_blank'>
          <p>45 Chapel Ash</p>
          <p>Wolverhampton</p>
          <p>WV3 0UF</p>
        </a>
        <h4 className={styles.contactSubTitle}>instagram</h4>
        <a href='https://www.instagram.com/will_the_barber45/' target='_blank'>
          <img src={url} className={styles.contactSocial}/>
        </a>
      </div>
    </div>
  );
};

export default Hero;
