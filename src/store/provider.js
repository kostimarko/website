import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './createContext';

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
class AppProvider extends Component {
  state = {
    intro: 'An internet based designer',
    updateIntro: (title, bgColor, textColor, workType, copy) => {
      this.setState({
        intro: title,
        backgroundColor: bgColor,
        textColor: textColor,
        workType: workType,
        copy: copy,
      });
    },
    copy: 'You can find me on the bus, people watching.',
    backgroundColor: '#ffffff',
    textColor: '#313E50',
    workType: 'Kosti Marko',
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
