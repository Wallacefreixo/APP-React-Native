import styled from 'styled-components';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Icon = styled.TouchableOpacity`
  margin: 20px;
`;

export const HaveAccount = styled.TouchableOpacity`
  align-items: flex-end;
  padding-top: 20px;
  padding-right: 10px;
`;

export const Input = styled.TextInput`
  position: relative;
  border-radius: 50px;
  border-width: 1px;
  border-color: #fff;
  margin-bottom: 15px;
  padding: 18px;
  padding-left: 45px;
  color: #fff;
  font-size: ${props => props.theme.typo.size.small};
`;

export const IconInput = styled(Ionicons)`
  position: absolute;
  top: 18px;
  left: 20px;
`;

export const IconVisiblePassword = styled.View`
  position: absolute;
  top: 18px;
  right: 20px;
`;

export const Error = styled.Text`
  color: #fff;
  font-size: ${props => props.theme.typo.size.small};
  padding-bottom: 20px;
  padding-left: 8px;
`;

export const TxtHaveAccount = styled.Text`
  font-size: ${props => props.theme.typo.size.small};
  color: #fff;
`;