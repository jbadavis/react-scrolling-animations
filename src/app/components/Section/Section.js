import React from 'react';
import classNames from 'classnames/bind';

import styles from './section.scss';

const cx = classNames.bind(styles);

const Section = (props) => {
  const classNames = cx({
    section: true,
    border: props.border,
  });

  return (
    <div className={`${classNames} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Section;
