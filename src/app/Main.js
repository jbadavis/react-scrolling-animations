import React from 'react';

import SectionAnimate from './components/SectionAnimate/SectionAnimate';

import SectionOne from './sections/SectionOne/SectionOne';
import SectionContact from './sections/SectionContact/SectionContact';
import SectionAbout from './sections/SectionAbout/SectionAbout';

const Main = () => {
  return (
    <SectionAnimate triggerOffset='40'>
      <SectionOne />
      <SectionAbout />
      <SectionContact />
    </SectionAnimate>
  );
};

export default Main;
