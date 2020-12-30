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

export const IconVisiblePassword = styled.View`
  position: absolute;
  top: 18px;
  right: 20px;
`;