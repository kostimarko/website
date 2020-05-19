import React from 'react';
import Box from 'components/box';
import Paragraph from 'components/paragraph';
import TwoColumns from 'components/twoColumns';
import Img from 'gatsby-image';

const Intro = props => {
  const { description, image, title } = props;
  console.log(props);
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
export default Intro;
