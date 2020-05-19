import styled from 'styled-components';
import posed from 'react-pose';
import MEDIA from 'helpers/mediaTemplates';

const AnimatedContainer = {
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 100,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 100,
    },
  },
};

export const Container = styled(posed.div(AnimatedContainer))`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flexdirection: column;
  margin-bottom: 50px;

  a {
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
  ${MEDIA.PHONE`
  margin-bottom:10px;
`}
`;
export const HomeLink = styled.h1`
  font-size: 1.25rem;
  color: ${props => props.textColor};

  ${MEDIA.PHONE`
    font-size: 0.75rem;
  `};
`;
