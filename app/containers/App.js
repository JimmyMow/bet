import React, { Component, PropTypes } from 'react';
import Header from '../components/header';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
