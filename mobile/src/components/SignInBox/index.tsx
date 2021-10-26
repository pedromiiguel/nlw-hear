import React from 'react';


import { theme } from '../../styles/theme';
import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

import * as Styled from './styles';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <Styled.Container>
      <Button
        title="ENTRAR COM O GITHUB"
        color={theme.colors.black_primary}
        backgroundColor={theme.colors.yellow}
        icon="github"
        isLoading={isSigningIn}
        onPress={signIn}
      />
    </Styled.Container>
  );
}
