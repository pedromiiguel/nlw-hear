import React from 'react';
import * as Styled from './styles';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';
import { SendMessageForm } from '../../components/SendMessageForm';
import { useAuth } from '../../hooks/auth';

export function Home() {
  const { user } = useAuth();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Styled.Container>
        <Header />
        <MessageList />
        {user ? <SendMessageForm /> : <SignInBox />}
      </Styled.Container>
    </KeyboardAvoidingView>
  );
}
