import React from 'react';

import styles from './scrollDown.scss';

export default class ScrollDown extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {show: false};
  }

  componentDidMount() {
    this.setState({show: true});

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
