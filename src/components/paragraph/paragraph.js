import React from 'react';
import PropTypes from 'prop-types';
import { Text, Container } from './paragraph.css';

const Paragraph = ({ children, textColor, small }) => {
  return (
    <Container small={small}>
      <Text textColor={textColor} small={small}>
        {children}
      </Text>
    </Container>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  small: PropTypes.string,
};

export default Paragraph;
