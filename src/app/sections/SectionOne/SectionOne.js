import React from 'react';

import Section from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';
import ScrollDown from '../../components/ScrollDown/ScrollDown';

import styles from './sectionOne.scss';

const SectionOne = () => {
  return (
    <Section className={styles.sectionOne} border='true' >
      <Hero />
      <ScrollDown />
    </Section>
  );
};

export default SectionOne;
