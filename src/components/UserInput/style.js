import styled from 'styled-components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';

export const InputField = styled.TextInput`
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

export const InputIcon = styled(Ionicons)`
    position: absolute;
    top: 18px;
    left: 20px;
`;