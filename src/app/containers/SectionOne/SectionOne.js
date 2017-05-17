import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setScrollIndicator } from '../../actions';

import Section from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';

import styles from './sectionOne.scss';

class SectionOne extends React.Component {
  constructor(props) {
    super(props);

    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentDidMount() {
    setTimeout(() => this.props.setScrollIndicator(true), 100);
  }

  handleScroll() {
    this.props.setScrollIndicator(window.pageYOffset === 0 ? true : false);
  }

  render() {
    const section = this.props.sections[this.props.index];
    const reveal = section !== undefined ? section.reveal : false;

    const showIndicator = this.props.showScrollIndicator;
    const scrollClasses = `${styles.scrollDown} ${showIndicator ? styles.show : null}`;

    return (
      <Section className={styles.sectionOne} border={true} >
        <Hero reveal={reveal} />
        <h5 className={scrollClasses}>Scroll Down</h5>
      </Section>
    );
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
    setScrollIndicator: (showHide) => {
      dispatch(setScrollIndicator(showHide));
    }
  };
};

SectionOne.propTypes = {
  showScrollIndicator: PropTypes.bool,
  sections: PropTypes.array,
  index: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionOne);
