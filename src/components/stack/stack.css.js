import styled from 'styled-components';
import posed from 'react-pose';
import MEDIA from 'helpers/mediaTemplates';

const PosedText = posed.span({
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      ease: 'easeOut',
    },
  },
  hide: { opacity: 0, y: '100%' },
});

const PosedContainer = posed.div({
  show: { staggerChildren: 100 },
  hide: {},
});

export const Text = styled(PosedText)`
  display: flex;
  font-weight: 300;
  font-size: 1rem;
  margin-right: 15px;

  color: ${props => props.textColor};
  ${MEDIA.TABLET`
  display:flex;
  font-weight: 300;
  font-size:1rem;
  line-height: 1.5;
`} ${MEDIA.PHONE`
  display:flex;
  font-weight:300;
  font-size: 1rem;
  line-height: 1.5;
`};
`;
export const Container = styled(PosedContainer)`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-bottom: 25px;

  ${MEDIA.TABLET`
  margin-bottom: 15px;
  `}

  ${MEDIA.PHONE`
    flex-direction: column;
  `}
`;
