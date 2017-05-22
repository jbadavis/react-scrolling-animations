import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Section from '../../components/Section/Section';
import About from '../../components/About/About';

import styles from './sectionAbout.scss';

const SectionAbout = ({ sections, index }) => {
  const section = sections[index];
  const reveal = section !== undefined ? section.reveal : false;

  return (
    <Section className={styles.about}>
      <About reveal={reveal}/>
    </Section>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.sections
  };
};

SectionAbout.propTypes = {
  sections: PropTypes.array,
  index: PropTypes.number
};

export default connect(mapStateToProps)(SectionAbout);
