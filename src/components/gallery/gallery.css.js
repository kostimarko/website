import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.75rem;
  padding: 0;

  ${MEDIA.DESKTOP`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.75rem;
  padding:0;
  `}

  ${MEDIA.TABLET`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.75rem;
  padding:0;

  `};
  ${MEDIA.PHONE`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.75rem;
  padding: 0;
  `};
`;
