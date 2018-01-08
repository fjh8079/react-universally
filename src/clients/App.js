import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dummyAction } from './action';

class App extends Component {
  /**
   * or can use ES6 getters
   * https://github.com/yannickcr/eslint-plugin-react/issues/203
   */
  // static get propTypes() {
  //   return {
  //     dummyAction: PropTypes.func.isRequired,
  //   };
  // }

  componentDidMount() {
    this.props.dummyAction();
  }

  render() {
    return (
      <div>Hello World!!!!</div>
    );
  }
}

App.propTypes = {
  dummyAction: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dummyAction: () => {
      dispatch(dummyAction());
    },
  };
}

export default connect(null, mapDispatchToProps)(App);
