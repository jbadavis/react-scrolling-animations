import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Section from '../../components/Section/Section';
import Contact from '../../components/Contact/Contact';

import styles from './sectionContact.scss';

class SectionContact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const section = this.props.sections[this.props.index];
    const reveal = section !== undefined ? section.reveal : false;

    return (
      <Section className={styles.contact} border={true} >
        <Contact reveal={reveal} />
      </Section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sections: state.sections
  };
};

SectionContact.propTypes = {
  sections: PropTypes.array
};

export default connect(mapStateToProps)(SectionContact);
