import React from 'react';
import { connect } from 'react-redux';
import { setSectionPositions } from '../actions';

import SectionAnimate from '../components/SectionAnimate/SectionAnimate';
import styles from '../components/Section/section.scss';

const mapStateToProps = (state) => {
  return {
    positions: state.positions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSectionPositions: (positions) => {
      dispatch(setSectionPositions(positions));
    }
  };
};

const VisibleSections = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionAnimate);

export default VisibleSections;
