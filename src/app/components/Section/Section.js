import React from 'react';
import classNames from 'classnames/bind';

import styles from './section.scss';

const cx = classNames.bind(styles);

const Section = ({ background, border, colour, children }) => {
  let style = {
    background: background,
    color: colour
  };

  let classNames = cx({
    section: true,
    border: border
  });

  return (
    <div className={classNames} style={style} >
      {children}
    </div>
  );
};

export default Section;
