import React from 'react';
import PropTypes from 'prop-types';
import Head from 'components/head';
import Header from 'components/header';
import Footer from 'components/footer';
import GlobalStyle from 'global.css.js';
import { Container } from './layout.css';
import { Consumer } from '../../store/createContext';

const Layout = ({ children, textColor }) => (
  <Consumer>
    {({ backgroundColor, workType }) => (
      <Container backgroundColor={backgroundColor}>
        <GlobalStyle />
        <Head />
        <Header title={workType} textColor={textColor} />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer textColor={textColor} />
      </Container>
    )}
  </Consumer>
);

Layout.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
};

export default Layout;
