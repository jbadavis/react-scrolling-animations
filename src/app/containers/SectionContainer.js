import React from 'react';
import { connect } from 'react-redux';

import Section from '../components/Section/Section';

const mapStateToProps = (state) => {
  return {
    sections: state.sections
  };
};

const SectionContainer = connect(
  mapStateToProps
)(Section);

export default SectionContainer;
