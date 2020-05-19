import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './twoColumns.css';

const TwoColumns = ({ children, Direction }) => {
  return <Container Direction={Direction}>{children}</Container>;
};

TwoColumns.propTypes = {
  children: PropTypes.string,
  Direction: PropTypes.string,
};

export default TwoColumns;
