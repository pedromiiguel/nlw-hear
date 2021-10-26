import React from 'react';
import { Image } from 'react-native';
import avatarImg from '../../assets/avatar.png';
import * as Styled from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../styles/theme';

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },

  NORMAL: {
    containerSize: 48,
    avatarSize: 42,
  },
};

type Props = {
  imageUrl: string | undefined;
  sizes?: 'SMALL' | 'NORMAL';
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUrl, sizes = 'NORMAL' }: Props) {
  const { containerSize, avatarSize } = SIZES[sizes];

  return (
    <LinearGradient
      colors={[theme.colors.pink, theme.colors.yellow]}
      start={{ x: 0, y: 0.8 }}
      end={{x: 0.9, y: 1}}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Styled.AvatarImage
        source={{ uri: imageUrl || AVATAR_DEFAULT }}
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
        }}
      />
    </LinearGradient>
  );
}
