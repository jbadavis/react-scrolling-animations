import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setScrollIndicator } from '../../actions';

import Section from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';

import styles from './sectionOne.scss';

const SectionOne = ({ sections, index, showScrollIndicator }) => {
  const section = sections[index];
  const reveal = section !== undefined ? section.reveal : false;

  const showIndicator = showScrollIndicator;
  const scrollClasses = `${styles.scrollDown} ${showIndicator ? styles.show : null}`;

  return (
    <Section className={styles.sectionOne} border={true} >
      <Hero reveal={reveal} />
      <h5 className={scrollClasses}>Scroll Down</h5>
    </Section>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.sections,
    showScrollIndicator: state.showScrollIndicator
  };
};

SectionOne.propTypes = {
  sections: PropTypes.array,
  index: PropTypes.number,
  showScrollIndicator: PropTypes.bool
};

export default connect(mapStateToProps)(SectionOne);
