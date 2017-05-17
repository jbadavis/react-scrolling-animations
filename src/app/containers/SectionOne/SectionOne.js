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
    sections: state.sections
  };
};

SectionOne.propTypes = {
  sections: PropTypes.array,
  index: PropTypes.number
};

export default connect(mapStateToProps)(SectionOne);
