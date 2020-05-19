import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: flex;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.5;
  color: ${props => props.textColor};
  ${MEDIA.TABLET`
  display:flex;
  font-weight: 700;
  font-size:1.6rem;
  line-height: 1.5;
`} ${MEDIA.PHONE`
  display:flex;
  font-weight:700;
  font-size: 1rem;
  line-height: 1.5;
`};
`;
