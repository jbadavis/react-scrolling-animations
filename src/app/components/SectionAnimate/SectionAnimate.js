import React from 'react';

import styles from '../Section/section.scss';

export default class SectionAnimate extends React.Component {
  constructor(props) {
    super(props);

    this.pos = [];
  }

  componentDidMount() {
    this.init();
  }

  init() {
    this.getSections();
    this.initPos();
    this.getPos();

    this.props.setSectionPositions(this.pos);

    this.checkReveal();

    window.addEventListener('scroll', () => this.handleScroll());
  }

  getSections() {
    this.sections = [...document.getElementsByClassName(styles.section)];
  }

  initPos() {
    this.sections.forEach((s, i) => this.pos.push({reveal: false}));
  }

  getPos() {
    this.sections.forEach((s, i) => this.pos[i].top = s.getBoundingClientRect().top);
  }

  checkReveal() {
    const offset = (window.innerHeight / 100) * this.props.triggerOffset;
    const trigger = window.innerHeight - offset;

    for (let i in this.props.sections) {
      let section = this.props.sections[i];

      if (section.top <= trigger && section.reveal === false) {
        this.props.animateSection(i);
      }
    }
  }

  handleScroll() {
    this.getPos();
    this.checkReveal();
  }

  render() {
    const children = React.Children.map(this.props.children, (child, i) => {
      const hasKey = this.props.sections.length > 1;

      return React.cloneElement(child, {
        reveal: hasKey ? this.props.sections[i].reveal : false
      });
    });

    return (
      <div>{children}</div>
    );
  }
};
