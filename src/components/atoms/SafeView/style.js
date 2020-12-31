import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MainWrapper = styled(SafeAreaView)`
	flex: 1;
	background-color: ${ props => props.colored ? props.theme.color.primary : '#fff' };
`;

export const CenteredWrapper = styled(MainWrapper)`
	align-items: center;
	justify-content: center;
`;