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