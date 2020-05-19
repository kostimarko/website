import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 4rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding-bottom: 100px;

  background-color: ${props => props.backgroundColor};
  transition: background-color 150ms linear;

  ${MEDIA.TABLET`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding-bottom: 100px;

  background-color: ${props => props.backgroundColor};
  transition: background-color 150ms linear;
  `}

  ${MEDIA.PHONE`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding-bottom: 100px;

  background-color: ${props => props.backgroundColor};
  transition: background-color 150ms linear;
  `}
`;
