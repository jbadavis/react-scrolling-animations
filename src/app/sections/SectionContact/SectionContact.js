import React from 'react';

import Section from '../../containers/SectionContainer';

import Contact from '../../components/Contact/Contact';

import styles from './sectionContact.scss';

const SectionContact = ({ reveal }) => {
  return (
    <Section className={styles.sectionContact} border='true'>
      <Contact reveal={reveal} />
    </Section>
  );
};

export default SectionContact;
