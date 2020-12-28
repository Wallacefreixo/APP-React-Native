import styled from 'styled-components';
import { TouchableOpacity, Text, View } from 'react-native';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-bottom: ${ props => props.marginBottom ? '20px' : '0px' };
`;

export const Button = styled.TouchableOpacity`
	flex: 1;
	height: 50px;
	border-radius: 50px;
	align-items: center;
	justify-content: center;
	background-color: ${ props => props.colored ? '#4898dd' : '#fff' };
`;

export const Content = styled.Text`
	color: ${ props => props.colored ? '#fff' : '#4898dd' };
	font-size: 20px;
	font-weight: bold;
`;