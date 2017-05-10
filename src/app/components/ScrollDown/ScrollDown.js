import React from 'react';

import styles from './scrollDown.scss';

export default class ScrollDown extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {show: false};
  }

  componentDidMount() {
    setTimeout(() => this.setState({show: true}), 2000);

    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    this.setState({
      show: window.pageYOffset === 0 ? true : false
    });
  }

  render() {
    const classNames = `${styles.scrollDown} ${this.state.show ? styles.show : null}`;

    return (
      <h5 className={classNames}>Scroll Down</h5>
    );
  }
};
