import React from 'react';
import PropTypes from 'prop-types';

import styles from './contact.scss';
import url from '../../../img/instagram.svg';

const Contact = ({ reveal }) => {
  const classNames = `${styles.contact} ${reveal ? styles.show : ''}`;

  return (
    <div className={classNames}>
      <div className={styles.content}>
        <h6 className={styles.title}>contact</h6>
        <div className={styles.details}>
          <h4 className={styles.subtitle}>phone</h4>
          <a href='tel:+441902424846'>01902 424846</a>
          <h4 className={styles.subtitle}>address</h4>
          <a href='https://goo.gl/maps/HXnx5EAekUP2' target='_blank'>
            <p>45 Chapel Ash</p>
            <p>Wolverhampton</p>
            <p>WV3 0UF</p>
          </a>
          <h4 className={styles.subtitle}>instagram</h4>
          <a href='https://www.instagram.com/will_the_barber45/' target='_blank'>
            <img src={url} className={styles.socialIcon}/>
          </a>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  reveal: PropTypes.bool
};

export default Contact;
