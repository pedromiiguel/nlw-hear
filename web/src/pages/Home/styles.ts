import styled from 'styled-components';
import background from '../../assets/background.svg';

export const ContentWrapper = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;

  &.contentSigned {
    &::before {
      content: '';
      height: 100vh;
      width: 420px;
      background: url(${background}) no-repeat;
      background-size: cover;
      position: absolute;
      right: -200px;
      top: 0;
    }
  }
`;
