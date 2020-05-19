import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-conent: flex-start;
  margin-bottom: 50px;
  padding-right: 0px;

  ${MEDIA.TABLET`
    padding-right:0px;
  `}

  ${MEDIA.PHONE`
    margin-bottom:25px;
  `}
`;
