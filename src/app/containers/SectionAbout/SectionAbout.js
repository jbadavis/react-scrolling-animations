import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Section from '../../components/Section/Section';
import About from '../../components/About/About';

import styles from './sectionAbout.scss';

class SectionAbout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const section = this.props.sections[this.props.index];
    const reveal = section !== undefined ? section.reveal : null;

    return (
      <Section className={styles.about}>
        <About reveal={reveal}/>
      </Section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sections: state.sections
  };
};

SectionAbout.propTypes = {
  sections: PropTypes.array
};

export default connect(mapStateToProps)(SectionAbout);
