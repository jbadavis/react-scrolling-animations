import React from 'react';

import Section from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';
import ScrollDown from '../../components/ScrollDown/ScrollDown';

import styles from './sectionOne.scss';

const SectionOne = ({reveal}) => {
  return (
    <Section className={styles.sectionOne} border='true' >
      <Hero reveal={reveal}/>
      <ScrollDown />
    </Section>
  );
};

export default SectionOne;
