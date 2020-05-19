import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Copy from 'components/copy';
import { graphql } from 'gatsby';
import { Consumer } from '../store/createContext';
const Index = ({ data }) => {
  return (
    <Consumer>
      {({ intro, textColor, copy }) => (
        <Layout textColor={textColor}>
          <Box>
            <Title as="h2" size="large" textColor={textColor}>
              {intro}
            </Title>
            <Copy as="h3" size="large" textColor={textColor}>
              {copy}
            </Copy>
          </Box>

          <Gallery items={data.allMarkdownRemark.edges} />
        </Layout>
      )}
    </Consumer>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "work" } } }
      sort: { fields: [frontmatter___id], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bgColor
            textColor
            workType
            copy
          }
        }
      }
    }
  }
`;
