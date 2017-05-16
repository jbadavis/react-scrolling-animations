import React from 'react';

import SectionAnimate from './containers/SectionAnimate/SectionAnimate';

import SectionOne from './containers/SectionOne/SectionOne';
import SectionAbout from './containers/SectionAbout/SectionAbout';
import SectionContact from './containers/SectionContact/SectionContact';

const Main = (props) => {
  return (
    <SectionAnimate triggerOffset='40'>
      <SectionOne index='0'/>
      <SectionAbout index='1'/>
      <SectionContact index='2'/>
    </SectionAnimate>
  );
};

export default Main;
