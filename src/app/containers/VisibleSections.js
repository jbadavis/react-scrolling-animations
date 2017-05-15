import React from 'react';
import { connect } from 'react-redux';
import { setSectionPositions, animateSection } from '../actions';

import SectionAnimate from '../components/SectionAnimate/SectionAnimate';

const mapStateToProps = (state) => {
  return {
    sections: state.sections
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSectionPositions: (sections) => {
      dispatch(setSectionPositions(sections));
    },
    animateSection: (index) => {
      dispatch(animateSection(index));
    }
  };
};

const VisibleSections = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionAnimate);

export default VisibleSections;
