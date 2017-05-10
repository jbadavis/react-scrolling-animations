import React from 'react';

import SectionAnimate from './components/SectionAnimate/SectionAnimate';

import SectionOne from './sections/SectionOne/SectionOne';
import SectionContact from './sections/SectionContact/SectionContact';
import SectionAbout from './sections/SectionAbout/SectionAbout';

const Main = () => {
  return (
    <SectionAnimate triggerOffset='20'>
      <SectionOne key='0' />
      <SectionAbout key='1' />
      <SectionContact key='2' />
    </SectionAnimate>
  );
};

export default Main;
