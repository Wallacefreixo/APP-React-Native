import React from 'react-native';
import { View } from 'react-native';
import { InputField } from './style.js';
import Ionicons from '@expo/vector-icons/Ionicons';

function UserInput(props) {
    console.log(props);
    
    return (
        <View>
            <Ionicons name="ios-mail" size={20} color="#fff" /> 
            <InputField
                value={props.value}  
                placeholder={props.sample}
                placeholderTextColor={props.sampleColor}
                onChangeText={props.onChange} />
        </View>
    );
};

export default UserInput;