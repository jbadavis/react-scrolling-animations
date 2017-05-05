import React from 'react';

import SectionOne from './sections/SectionOne/SectionOne';
import SectionContact from './sections/SectionContact/SectionContact';
import SectionAbout from './sections/SectionAbout/SectionAbout';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <SectionOne />
        <SectionAbout />
        <SectionContact />
      </div>
    );
  }
}
