import React from 'react';

import styles from '../Section/section.scss';

export default class SectionAnimate extends React.Component {
  constructor(props) {
    super(props);

    this.pos = {};
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
  }

  getSections() {
    this.sections = [...document.getElementsByClassName(styles.section)];
  }

  initPos() {
    this.sections.forEach((s, i) => {
      this.pos[i] = {};
      this.pos[i].reveal = false;
    });
  }

  getPos() {
    this.sections.forEach((s, i) => this.pos[i].top = s.getBoundingClientRect().top);
  }

  checkReveal() {
    const offset = (window.innerHeight / 100) * this.props.triggerOffset;
    const trigger = window.innerHeight - offset;

    for (let i in this.props.positions) {
      if (this.pos[i].top <= trigger && this.pos[i].reveal === false) {
        this.pos[i].reveal = true;
        this.props.setSectionPositions(this.pos);
      }
    }
  }

  handleScroll() {
    this.getPos();
    this.checkReveal();
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
};
