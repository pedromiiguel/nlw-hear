/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import {
  MessageListWrapper,
  MessageList as MessageListing,
  Message,
  MessageContent,
  MessageUser,
  UserImg,
} from './styles';

import { api } from '../../services/api';

import Logo from '../../assets/logo.svg';

interface IMessage {
  id: string;
  text: string;

  user: {
    name: string;
    avatar_url: string;
  };
}

const messagesQueue: IMessage[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', (newMessage: IMessage) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean),
        );
        messagesQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    api
      .get<IMessage[]>('messages/last3')
      .then((response) => setMessages(response.data));
  }, []);

  return (
    <MessageListWrapper>
      <img src={Logo} alt="Do While" />
      <MessageListing>
        {messages.map((message) => (
          <Message key={message.id}>
            <MessageContent>{message.text}</MessageContent>
            <MessageUser>
              <UserImg>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </UserImg>
              <span>{message.user.name}</span>
            </MessageUser>
          </Message>
        ))}
      </MessageListing>
    </MessageListWrapper>
  );
}
