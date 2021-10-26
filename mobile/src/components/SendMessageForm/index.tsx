import React, { useState } from 'react';

import { Alert, Keyboard, View } from 'react-native';
import { api } from '../../services/api';
import { theme } from '../../styles/theme';
import { Button } from '../Button';

import * as Styled from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      setSendingMessage(true);
      await api.post('/messages', { message: messageFormatted });
      setMessage('');
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert('mensagem enviada com sucesso!');
    } else {
      Alert.alert('Escreva a mensagem para enviar.');
    }
  }

  return (
    <>
      <Styled.Container>
        <Styled.Input
          keyboardAppearance="dark"
          placeholder="Qual sua expectativa para o evento"
          placeholderTextColor={theme.colors.gray_primary}
          multiline
          maxLength={140}
          editable={!sendingMessage}
          onChangeText={setMessage}
          value={message}
        />
        <Button
          title="ENVIAR MENSAGEM"
          backgroundColor={theme.colors.pink}
          color={theme.colors.white}
          isLoading={sendingMessage}
          onPress={handleMessageSubmit}
        />
      </Styled.Container>
    </>
  );
}
