import React from 'react';

import Section from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';
import ScrollDown from '../../components/ScrollDown/ScrollDown';

const SectionOne = () => {
  return (
    <Section background='#91A8D0' border='true'>
      <Hero />
      <ScrollDown />
    </Section>
  );
};

export default SectionOne;
