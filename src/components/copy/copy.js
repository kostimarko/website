import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './copy.css';

const Copy = ({ children, textColor }) => {
  return <Text textColor={textColor}>{children}</Text>;
};

Copy.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Copy;
