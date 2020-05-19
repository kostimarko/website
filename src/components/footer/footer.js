import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { Container } from './footer.css';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 100,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 100,
    },
  },
});

const Footer = ({ title, textColor }) => (
  <AnimatedContainer style={{ flex: 1 }}>
    <Container>
      <p style={{ color: textColor }}>From Russia with Love</p>
    </Container>
  </AnimatedContainer>
);

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;
