import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import classNames from 'classnames/bind';

import styles from './scrollDown.scss';

export default class ClassName extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {hidePrompt: false};
    this.cx = classNames.bind(styles);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    this.setState({
      hidePrompt: window.pageYOffset === 0 ? false : true
    });
  }

  render() {
    let classNames = this.cx({
      scrollDown: true,
      hide: this.state.hidePrompt,
    });

    return (
      <CSSTransitionGroup
        transitionName={styles}
        transitionAppear={true}
        transitionAppearTimeout={2400}
        transitionEnter={false}
        transitionLeave={false}>
        <h5 className={classNames}>Scroll Down</h5>
      </CSSTransitionGroup>
    );
  }
};
