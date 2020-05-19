import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${props => props.Direction};

  ${MEDIA.DESKTOP`
    flex-direction: column;
  `}

  ${MEDIA.TABLET`
    flex-direction: column;
  `}

  ${MEDIA.PHONE`
    flex-direction:column;
  `}
`;
