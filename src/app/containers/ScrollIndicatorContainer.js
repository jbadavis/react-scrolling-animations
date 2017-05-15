import React from 'react';
import { connect } from 'react-redux';
import { setScrollIndicator } from '../actions';

import ScrollDown from '../components/ScrollDown/ScrollDown';

const mapStateToProps = (state) => {
  return {
    showScrollIndicator: state.showScrollIndicator
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScrollIndicator: (showHide) => {
      dispatch(setScrollIndicator(showHide));
    }
  };
};

const ScrollIndicatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollDown);

export default ScrollIndicatorContainer;
