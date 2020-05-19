import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = ({ textColor }) => (
  <Container>
    <ul>
      <li>
        <a style={{ color: textColor }} href="https://medium.com/@kostimarko">
          Writing
        </a>
      </li>
      <li>
        <a style={{ color: textColor }} href="https://github.com/kostimarko">
          Github
        </a>
      </li>
      <li>
        <Link to="/contact" style={{ color: textColor }}>
          Contact
        </Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
