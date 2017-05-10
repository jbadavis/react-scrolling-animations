import React from 'react';

import Section from '../../components/Section/Section';
import About from '../../components/About/About';

import styles from './sectionAbout.scss';

const SectionAbout = ({reveal}) => {
  return (
    <Section className={styles.about}>
      <About reveal={reveal}/>
    </Section>
  );
};

export default SectionAbout;
