import React from 'react';

import SectionOne from './sections/SectionOne/SectionOne';
import SectionTwo from './sections/SectionTwo/SectionTwo';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <SectionOne />
        <SectionTwo />
      </div>
    );
  }
}
