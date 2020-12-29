import styled from 'styled-components';
import { Text } from 'react-native';

export const Content = styled.Text`
    font-size: ${props => props.theme.typo.size.normal};
`;

export const Title = styled(Content)`
    color: #fff;
    font-weight: bold;
    font-size: ${props => props.theme.typo.size.big};
    padding-bottom: 30px;
`;

export const BigTitle = styled(Title)`
    align-items: center;
    font-size: ${props => props.theme.typo.size.huge};
    padding-bottom: 20px;
`;

export const Description = styled(Content)`
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.typo.size.small};
    padding-bottom: 60px;
`;