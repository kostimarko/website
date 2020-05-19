import React from 'react';
import Box from 'components/box';
import Layout from 'components/layout';
import Lottie from 'react-lottie';

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('../animations/404.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Layout>
      <Box>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Box>
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Change the channel</p>
      </div>
    </Layout>
  );
};

export default NotFound;
