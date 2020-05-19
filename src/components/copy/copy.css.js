import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: flex;
  font-size: 2rem;
  line-height: 1.5;
  color: ${props => props.textColor};
  ${MEDIA.TABLET`
font-size:1.6rem;
`};

  ${MEDIA.PHONE`
font-size: 1rem;
line-height: 1.5;
`}
`;
