import styled from 'styled-components';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Input = styled.TextInput`
  position: relative;
  border-radius: 50px;
  border-width: 1px;
  border-color: #fff;
  margin-bottom: 15px;
  padding: 18px;
  padding-left: 45px;
  color: #fff;
  font-size: 16px;
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

export const Icon = styled.TouchableOpacity`
  margin: 20px;
`;

export const ForgetPassword = styled.TouchableOpacity`
  align-items: flex-end;
  padding-top: 20px;
  padding-right: 10px;
`;

export const BannerCadastrar = styled.TouchableOpacity`
  background-color: #3B2675;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const TxtForgetPassword = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const TxtBannerCadastrar = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Error = styled.Text`
  color: #fff;
  font-size: 16px;
  padding-bottom: 20px;
  padding-left: 8px;
`;



