import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: flex;
  font-family: Roboto;
  font-size: ${props => {
    if (props.small) {
      return '1.2rem;';
    } else {
      return '1.5rem;';
    }
  }};
  font-weight: ${props => {
    if (props.small) {
      return '300';
    } else {
      return '300';
    }
  }};
  line-height: 1.5;
  color: ${props => props.textColor};
  ${MEDIA.TABLET`
    font-size:1.3rem;
  `};

  ${MEDIA.PHONE`
  font-size: 1rem;
  line-height: 1.5;
  
  `}
`;

export const Container = styled.div`
  
  padding-right: ${props => {
    if (props.small) {
      return '50px;';
    } else {
      return '100px';
    }
  }};

  ${MEDIA.DESKTOP`
    padding-right: 50px;
  `}

  ${MEDIA.TABLET`
    padding-right:0px;
  `}

  ${MEDIA.PHONE`
    padding-right:0px;
  `}
`;
