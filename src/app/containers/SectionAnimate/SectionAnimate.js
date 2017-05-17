import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSectionPositions, animateSection, setScrollIndicator } from '../../actions';

import styles from '../../components/Section/section.scss';

class SectionAnimate extends React.Component {
  constructor(props) {
    super(props);

    this.pos = [];
  }

  componentDidMount() {
    this.init();

    setTimeout(() => this.props.setScrollIndicator(true), 100);
  }

  componentDidUpdate() {
    this.checkReveal();
  }

  init() {
    this.getSections();
    this.initPos();
    this.getPos();

    this.props.setSectionPositions(this.pos);

    window.addEventListener('scroll', () => this.handleScroll());
  }

  getSections() {
    this.sections = [...document.getElementsByClassName(styles.section)];
  }

  initPos() {
    this.sections.forEach((s, i) => this.pos.push({reveal: false}));
  }

  getPos() {
    this.sections.forEach((s, i) => this.pos[i].top = s.getBoundingClientRect().top);
  }

  checkReveal() {
    const offset = (window.innerHeight / 100) * this.props.triggerOffset;
    const trigger = window.innerHeight - offset;

    for (let i in this.props.sections) {
      let section = this.props.sections[i];

      if (section.top <= trigger && section.reveal === false) {
        this.props.animateSection(i);
      }
    }
  }

  handleScroll() {
    this.props.setScrollIndicator(window.pageYOffset === 0 ? true : false);

    this.getPos();
    this.checkReveal();
  }

  render() {
    return <div>{this.props.children}</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    showScrollIndicator: state.showScrollIndicator,
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
    },
    setScrollIndicator: (showHide) => {
      dispatch(setScrollIndicator(showHide));
    }
  };
};

SectionAnimate.propTypes = {
  sections: PropTypes.array,
  triggerOffset: PropTypes.number,
  showScrollIndicator: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionAnimate);
