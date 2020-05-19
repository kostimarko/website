import React from 'react';
import Title from 'components/title';
import Paragraph from 'components/paragraph';
import Box from 'components/box';

import { Link } from 'gatsby';

const Article = ({ data }) => {
  return data.map(({ node }) => {
    return (
      <Box key={node.id}>
        <div style={{ display: 'flex', flexDirection: 'row' }}></div>
        <Title>{node.frontmatter.title}</Title>
        <Paragraph small={true}>{node.frontmatter.excerpt}</Paragraph>
        <Link style={{ marginTop: 25 }} to={`/${node.fields.slug}`}>
          Read More
        </Link>
        <hr
          style={{
            marginTop: 35,
            color: '#C5C5C5',
            backgroundColor: '#C5C5C5',
            height: 1,
            border: 'none',
            width: '100%',
          }}
        />
      </Box>
    );
  });
};

export default Article;
