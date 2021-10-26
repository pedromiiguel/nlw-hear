import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.black_secondary};
  padding-top: ${getStatusBarHeight() + 17};
`;