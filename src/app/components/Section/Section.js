import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './section.scss';

const cx = classNames.bind(styles);

const Section = (props) => {
  const classNames = cx('section', {border: props.border});

  return (
    <div className={`${classNames} ${props.className}`}>
      {props.children}
    </div>
  );
};

Section.propTypes = {
  border: PropTypes.bool,
  className: PropTypes.string
};

export default Section;
