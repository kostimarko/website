import styled from 'styled-components';

const androidLink =
  'https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg';
const iosLink =
  'https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg';

export const Button = styled.a`
  background: ${props => {
    if (props.ButtonType === 'ios') {
      return `url(${iosLink}) no-repeat;`;
    }
    if (props.ButtonType === 'android') {
      return `url(${androidLink}) no-repeat;`;
    } else {
      return null;
    }
  }};
  background-size: contain;
  display: inline-block;
  width: 70%;
  height: 100px;
`;
