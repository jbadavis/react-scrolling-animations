import React from 'react';

import SectionAnimateContainer from './containers/SectionAnimateContainer';

import SectionOne from './sections/SectionOne/SectionOne';
import SectionContact from './sections/SectionContact/SectionContact';
import SectionAbout from './sections/SectionAbout/SectionAbout';

const Main = (props) => {
  return (
    <SectionAnimateContainer triggerOffset='40'>
      <SectionOne />
      <SectionAbout />
      <SectionContact />
    </SectionAnimateContainer>
  );
};

export default Main;
