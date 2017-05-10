import React from 'react';

import styles from '../Section/section.scss';

export default class SectionAnimate extends React.Component {
  constructor(props) {
    super(props);

    this.pos = {};
    this.sections = [];
    this.state = {positions: {}};
  }

  componentDidMount() {
    this.getSections();
    this.initPos();
    this.getPos();

    this.setState({positions: this.pos});

    this.checkReveal();

    window.addEventListener('scroll', () => this.handleScroll());
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
    let trigger = window.innerHeight - this.props.triggerOffset;

    for (let i in this.pos) {
      if (this.pos[i].top <= trigger && this.pos[i].reveal === false) {
        this.pos[i].reveal = true;
        this.setState({positions: this.pos});
      }
    }
  }

  handleScroll() {
    this.getPos();
    this.checkReveal();
  }

  render() {
    const children = React.Children.map(this.props.children,
      child => {
        let hasKey = this.state.positions.hasOwnProperty(child.key);

        return React.cloneElement(child, {
          reveal: hasKey ? this.state.positions[child.key].reveal : false
        });
      }
    );

    return (
      <div>{children}</div>
    );
  }

}
