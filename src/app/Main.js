import React from 'react';

import VisibleSections from './containers/VisibleSections';

import SectionOne from './sections/SectionOne/SectionOne';
import SectionContact from './sections/SectionContact/SectionContact';
import SectionAbout from './sections/SectionAbout/SectionAbout';

const Main = () => {
  return (
    <VisibleSections triggerOffset='40'>
      <SectionOne />
      <SectionAbout />
      <SectionContact />
    </VisibleSections>
  );
};

export default Main;
