import React from 'react';
import { ColorValue, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Styled from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading: boolean;
};

export function Button({
  title,
  color,
  backgroundColor,
  icon,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <Styled.Button
      backgroundColor={backgroundColor}
      {...rest}
      activeOpacity={0.7}
      disabled={isLoading}
    >
     { 
      isLoading ? <ActivityIndicator color={color}/> : 
     <>
     <AntDesign name={icon} size={24} style={{ marginRight: 12 }} />
      <Styled.TextButton color={color}>{title}</Styled.TextButton>
     </>}
    </Styled.Button>
  );
}
