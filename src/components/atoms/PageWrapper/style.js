import styled from 'styled-components';
import { View } from 'react-native';

export const PageWrapper = styled.View`
    padding-left: 30px;
    padding-right: 30px;
    margin-top: ${ props => props.marginTop ? props.marginTop : '0px' };
`;

export const CenteredWrapper = styled(PageWrapper)`
    align-items: center;
`;

export const FlexWrapper = styled(PageWrapper)`
    flex: 2;
    width: 100%;
`;