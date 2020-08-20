import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/box';
import Paragraph from 'components/paragraph';
import TwoColumns from 'components/twoColumns';
import Img from 'gatsby-image';

const Intro = ({ description, image, title }) => {
  return (
    <TwoColumns Direction="row">
      <div style={{ flex: 1 }}>
        <Box>
          <Paragraph textColor={'#313E50'}>{description}</Paragraph>
        </Box>
      </div>
      <div style={{ flex: 1 }}>
        <Img fluid={image.childImageSharp.fluid} alt={title} />
      </div>
    </TwoColumns>
  );
};

Intro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
};
export default Intro;
