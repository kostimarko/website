import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/box';
import Title from 'components/title';
import Copy from 'components/copy';
import Stack from 'components/stack';

const Project = ({ title, copy, techStack }) => {
  return (
    <div style={{ flex: 1 }}>
      <Box>
        <Title textColor={'#313E50'}>{title}</Title>
        <Copy textColor={'#313E50'}>{copy}</Copy>
      </Box>
      <Box>
        <Stack stack={techStack} textColor={'#313E50'} />
      </Box>
    </div>
  );
};
Project.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  techStack: PropTypes.array,
};
export default Project;
