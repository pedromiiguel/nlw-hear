import { ColorValue } from 'react-native';
import styled from 'styled-components/native';

type TextButtonProps = {
  color: ColorValue;
}

type ButtonProps = {
  backgroundColor: ColorValue;
}


export const Button = styled.TouchableOpacity<ButtonProps>`
  height: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => String(props.backgroundColor)};
  
`;

export const TextButton = styled.Text<TextButtonProps>`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${(props) => String(props.color)};
`;