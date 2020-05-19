import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, textColor }) => {
  return <Text textColor={textColor}>{children}</Text>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
