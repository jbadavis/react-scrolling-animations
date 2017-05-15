import React from 'react';

import styles from './scrollDown.scss';

export default class ScrollDown extends React.Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => this.props.setScrollIndicator(true), 2000);

    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    this.props.setScrollIndicator(window.pageYOffset === 0 ? true : false);
  }

  render() {
    const classNames = `${styles.scrollDown} ${this.props.showScrollIndicator ? styles.show : null}`;

    return (
      <h5 className={classNames}>Scroll Down</h5>
    );
  }
};
