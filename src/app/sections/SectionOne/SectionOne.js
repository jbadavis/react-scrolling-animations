import React from 'react';

import Section from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';

import ScrollIndicatorContainer from '../../containers/ScrollIndicatorContainer';

import styles from './sectionOne.scss';

const SectionOne = ({ reveal }) => {
  return (
    <Section className={styles.sectionOne} border='true' >
      <Hero reveal={reveal} />
      <ScrollIndicatorContainer />
    </Section>
  );
};

export default SectionOne;
