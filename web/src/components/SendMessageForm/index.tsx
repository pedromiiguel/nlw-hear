/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-useless-return */
import React, { useContext, useState, FormEvent } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';
import {
  SendMessageFormWrapper,
  SignOutButton,
  UserInformation,
  UserImage,
  UserName,
  UserGithub,
  Form,
} from './styles';

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    await api.post('messages', { message });

    setMessage('');
  }

  return (
    <SendMessageFormWrapper>
      <SignOutButton onClick={signOut}>
        <VscSignOut size="32px" />
      </SignOutButton>

      <UserInformation>
        <UserImage>
          <img src={user?.avatar_url} alt={user?.name} />
        </UserImage>
        <UserName>{user?.name}</UserName>
        <UserGithub>
          <VscGithubInverted size="16" /> {user?.login}
        </UserGithub>
      </UserInformation>

      <Form onSubmit={handleSendMessage}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectative para o evento?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type="submit">Enviar Mensagem</button>
      </Form>
    </SendMessageFormWrapper>
  );
}
