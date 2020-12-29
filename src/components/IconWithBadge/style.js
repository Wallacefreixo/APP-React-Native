import styled from 'styled-components';
import { Text, View } from 'react-native';

export const Container = styled.View`
	width: 24px;
	height: 24px;
	margin: 5px;
`;

export const CounterContent = styled.Text`
	color: white;
	font-size: ${props => props.theme.typo.size.tiny};
	font-weight: bold;
`;

export const CounterWrapper = styled.View`
	position: absolute;
	right: -6px;
	top: -3px;
	background-color: ${props => props.theme.color.contrast};
	border-radius: 6px;
	width: 12px;
	height: 12px;
	justify-content: center;
	align-items: center;
`;