import React from 'react';

import styles from './section.scss';

const Section = ({ children }) => {
  return (
    <div className={styles.section}>
      {children}
    </div>
  );
};

export default Section;
