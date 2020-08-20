import React from 'react';
import Layout from 'components/layout';
import Form from 'components/form';

import { Consumer } from '../store/createContext';

const Contact = () => {
  return (
    <Consumer>
      {({ textColor }) => (
        <Layout textColor={textColor}>
          <Form />
        </Layout>
      )}
    </Consumer>
  );
};

export default Contact;
