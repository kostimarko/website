import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, HomeLink } from './header.css';
import Nav from 'components/header/nav';

const Header = ({ title, textColor }) => (
  <Container>
    <Link to="/">
      <HomeLink textColor={textColor}>{title}</HomeLink>
    </Link>
    <Nav textColor={textColor} />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
