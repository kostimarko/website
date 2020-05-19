import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import Layout from 'components/layout';
import Form from 'components/form';

import { Consumer } from '../store/createContext';

const Contact = () => {
  return (
    <Consumer>
      {({ intro, textColor }) => (
        <Layout textColor={textColor}>
          <Form />
        </Layout>
      )}
    </Consumer>
  );
};

export default Contact;
