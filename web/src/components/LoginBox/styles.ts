import styled from 'styled-components';
import BannerGirl from '../../assets/banner-girl.png';

export const LoginBoxWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #17171a url(${BannerGirl}) no-repeat center top;

  padding: 440px 80px 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextStrong = styled.strong`
  font-size: 3.2rem;
  line-height: 3.6rem;
`;

export const SignInWithGithub = styled.a`
  background: #ffcd1e;
  margin-top: 32px;
  padding: 0 40px;
  height: 56px;
  color: #09090a;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 1.6rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
