import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 184px;
  background-color: ${({theme}) => theme.colors.black_tertiary};
  padding: 0 24px;
  padding-bottom: ${getBottomSpace() + 16};
  padding-top: 16px;

`;


export const Input = styled.TextInput`
  width: 100%;
  height: 88px;
  align-items: center;
  color: ${({theme}) => theme.colors.white};
`;
