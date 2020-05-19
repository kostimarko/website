import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';

import Paragraph from 'components/paragraph';
import TwoColumns from 'components/twoColumns';
import StoreButton from 'components/store-button';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Consumer } from '../../store/createContext';
import Project from './project';
import Intro from './intro';

const SectionOne = ({ sectionOne }) => {
  if (sectionOne === null) {
    return null;
  } else {
    return (
      <div>
        <div style={{ flex: 1, marginTop: '50px', marginBottom: '50px' }}>
          <hr
            style={{
              color: '#C5C5C5',
              backgroundColor: '#C5C5C5',
              height: 1,
              border: 'none',
            }}
          />
        </div>
        <TwoColumns Direction="row">
          <div style={{ flex: 1 }}>
            <Box>
              <Paragraph textColor={'#313E50'}>
                {sectionOne[0].sectionTitle}
              </Paragraph>
            </Box>
            <Box>
              <Paragraph textColor={'#313E50'} small={true}>
                {sectionOne[0].sectionDescription}
              </Paragraph>
            </Box>
          </div>
          <div style={{ flex: 2 }}>
            <Img fluid={sectionOne[0].sectionImage.childImageSharp.fluid} />
          </div>
        </TwoColumns>
      </div>
    );
  }
};

const SectionTwo = ({ sectionTwo }) => {
  if (sectionTwo === null) {
    return null;
  } else {
    return (
      <React.Fragment>
        <div style={{ flex: 1, marginTop: '50px', marginBottom: '50px' }}>
          <hr
            style={{
              color: '#C5C5C5',
              backgroundColor: '#C5C5C5',
              height: 1,
              border: 'none',
            }}
          />
          <TwoColumns Direction="column">
            <div style={{ flex: 1 }}>
              <Box>
                <Paragraph textColor={'#313E50'}>
                  {sectionTwo[0].sectionTitle}
                </Paragraph>
              </Box>
            </div>
            {sectionTwo[0].sectionImage.map((i, index) => {
              return (
                <Img
                  key={index}
                  style={{ marginBottom: '25px' }}
                  fluid={i.childImageSharp.fluid}
                />
              );
            })}
          </TwoColumns>
        </div>
      </React.Fragment>
    );
  }
};

const StatusSection = ({ statusSection }) => {
  if (statusSection === null) {
    return null;
  } else {
    return (
      <div>
        <div style={{ flex: 1, marginTop: '50px', marginBottom: '50px' }}>
          <hr
            style={{
              color: '#C5C5C5',
              backgroundColor: '#C5C5C5',
              height: 1,
              border: 'none',
            }}
          />
        </div>
        <TwoColumns Direction="row">
          <div style={{ flex: 1 }}>
            <Box>
              <Paragraph textColor={'#313E50'}>Status</Paragraph>
            </Box>
            <Box>
              <Paragraph textColor={'#313E50'} small={true}>
                {statusSection[0].status}
              </Paragraph>
            </Box>
            <Box>
              <StoreButton ButtonType={'ios'} />
            </Box>
          </div>
          <div style={{ flex: 2 }}>
            <Img fluid={statusSection[0].image.childImageSharp.fluid} />
          </div>
        </TwoColumns>
      </div>
    );
  }
};

const Work = ({ data }) => {
  const {
    bgColor,
    sectionOne,
    sectionTwo,
    title,
    copy,
    techStack,
    description,
    image,
    statusSection,
  } = data.markdownRemark.frontmatter;
  return (
    <Consumer>
      {() => (
        <Layout textColor={bgColor}>
          <Project title={title} copy={copy} techStack={techStack} />
          <Intro description={description} image={image} title={title} />
          {SectionOne({ sectionOne })}
          {SectionTwo({ sectionTwo })}
          {StatusSection({ statusSection })}
        </Layout>
      )}
    </Consumer>
  );
};

Work.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Work;

export const query = graphql`
  query($title: String) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        copy
        bgColor
        techStack
        description
        sectionOne {
          sectionTitle
          sectionDescription
          sectionImage {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        sectionTwo {
          sectionTitle
          isMobile
          sectionImage {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        statusSection {
          status
          releaseLink
          image {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
