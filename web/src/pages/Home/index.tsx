/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { LoginBox } from '../../components/LoginBox';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { AuthContext } from '../../contexts/auth';

import { ContentWrapper } from './styles';

export function Home() {
  const { user } = useContext(AuthContext);

  return (
    <ContentWrapper className={`${user ? 'contentSigned' : ''}`}>
      <MessageList />
      {user ? <SendMessageForm /> : <LoginBox />}
    </ContentWrapper>
  );
}
