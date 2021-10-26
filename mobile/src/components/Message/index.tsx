import React from 'react';

import { UserPhoto } from '../UserPhoto';
import { MotiView } from 'moti';

import * as Styled from './styles';

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

type Props = {
  data: MessageProps;
};

export function Message({ data }: Props) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={{ width: '100%', marginBottom: 36 }}
    >
      <Styled.TextMesssage>{data.text}</Styled.TextMesssage>

      <Styled.Footer>
        <UserPhoto imageUrl={data.user.avatar_url} sizes="SMALL" />
        <Styled.UserName>{data.user.name}</Styled.UserName>
      </Styled.Footer>
    </MotiView>
  );
}
