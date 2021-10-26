import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { UserPhoto } from '../UserPhoto';

import * as Styled from './styles';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <Styled.Container>
      <LogoSvg />
      {user && (
        <Styled.LogoutButton>
          <TouchableOpacity>
            <Styled.LogoutText onPress={signOut}>Sair</Styled.LogoutText>
          </TouchableOpacity>

          <UserPhoto imageUrl={user?.avatar_url} />
        </Styled.LogoutButton>
      )}
    </Styled.Container>
  );
}
