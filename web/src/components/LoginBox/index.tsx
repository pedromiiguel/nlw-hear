/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';

import { LoginBoxWrapper, TextStrong, SignInWithGithub } from './styles';

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);

  return (
    <LoginBoxWrapper>
      <TextStrong>Entre e compartilhe sua mensagem</TextStrong>
      <SignInWithGithub href={signInUrl} aria-label="entrar no github">
        <VscGithubInverted size="24" />
        Entrar com Github
      </SignInWithGithub>
    </LoginBoxWrapper>
  );
}
