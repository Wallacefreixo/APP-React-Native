import styled from 'styled-components';
import { View } from 'react-native';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-bottom: ${ props => props.marginBottom ? '20px' : '0px' };
`;