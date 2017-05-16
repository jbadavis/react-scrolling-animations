import React from 'react';
import { connect } from 'react-redux';

import Section from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';

// import ScrollIndicatorContainer from '../../containers/ScrollIndicatorContainer';

import styles from './sectionOne.scss';

class SectionOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const section = this.props.sections[this.props.index];
    const reveal = section !== undefined ? section.reveal : null;

    return (
      <Section className={styles.sectionOne} border='true' >
        <Hero reveal={reveal} />
        {/* <ScrollIndicatorContainer /> */}
      </Section>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    sections: state.sections
  };
};

export default connect(mapStateToProps)(SectionOne);
