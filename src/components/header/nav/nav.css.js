import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      font-size: 1rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }

  ${MEDIA.PHONE`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      font-size: .75rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
  `}
`;
