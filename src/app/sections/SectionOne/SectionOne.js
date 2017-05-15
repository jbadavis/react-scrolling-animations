import React from 'react';

import Section from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';

import ScrollIndicator from '../../containers/ScrollIndicator';

import styles from './sectionOne.scss';

const SectionOne = () => {
  return (
    <Section className={styles.sectionOne} border='true' >
      <Hero />
      <ScrollIndicator />
    </Section>
  );
};

export default SectionOne;
