import styled from 'styled-components';
import { Text } from 'react-native';

export const Content = styled.Text`
    font-size: 20px;
`;

export const Title = styled(Content)`
    color: #fff;
    font-weight: bold;
    font-size: 35px;
    padding-bottom: 30px;
`;

export const BigTitle = styled(Title)`
    align-items: center;
    font-size: 40px;
    padding-bottom: 20px;
`;

export const Description = styled(Content)`
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 16px;
    padding-bottom: 60px;
`;