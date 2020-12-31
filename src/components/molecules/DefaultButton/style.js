import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

export const Button = styled.TouchableOpacity`
	flex: 1;
	height: 50px;
	border-radius: 50px;
	align-items: center;
	justify-content: center;
	background-color: ${ props => props.colored ? props.theme.color.lighter : '#fff' };
`;

export const ShowPass = styled.TouchableOpacity`
  position: absolute;
  top: 18px;
  right: 20px;
`;

export const SimpleIcon = styled.TouchableOpacity`
  margin: 20px;
`;

export const SimpleText = styled.TouchableOpacity`
  align-items: flex-end;
  padding-top: 20px;
  padding-right: 10px;
`;

export const FullBox = styled.TouchableOpacity`
  background-color: ${props => props.theme.color.darken};
  height: 60px;
  align-items: center;
  justify-content: center;
`;