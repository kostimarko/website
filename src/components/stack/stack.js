import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, Container } from './stack.css';

const Stack = ({ stack, textColor }) => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });
  return (
    <div>
      <p style={{ marginBottom: 5, fontWeight: '700', color: `${textColor}` }}>
        Tech Stack
      </p>
      <Container pose={isMounted ? 'show' : 'hide'}>
        {stack.map(s => {
          return (
            <Text key={s} textColor={textColor}>
              {s}
            </Text>
          );
        })}
      </Container>
    </div>
  );
};

Stack.propTypes = {
  children: PropTypes.string,
};

export default Stack;
