import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { InputIcon, InputRow, InputField } from './style.js';

function UserInput(props) {
    return (
        <InputRow>
            <InputIcon name={props.iconSet[0]} size={props.iconSet[1]} color={props.iconSet[2]} />
            <InputField value={props.value}  
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry} />
            {props.children}
        </InputRow>
    );
};

export default UserInput;