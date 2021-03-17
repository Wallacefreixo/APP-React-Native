import React from 'react';

import { View, Text } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Container } from '../../atoms/Container/style';

import { Content, Title } from '../../atoms/Content/style';
import { FlexWrapper } from '../../atoms/PageWrapper/style';
import { SimpleIcon } from '../../molecules/DefaultButton/style'

function Card(props) {
    return (
        <FlexWrapper marginTop='40px'>
            <View>
                <SimpleIcon>
                    <Ionicons name="information-circle" size={20} color="#0f0" /> 
                </SimpleIcon>
            </View>
            <View>
                <SimpleIcon>
                    <Ionicons name="close-circle" size={40} color="#00f" /> 
                </SimpleIcon>
                
                <View>
                    <Title>Fernanda, 21</Title>
                    <View>
                        <Ionicons name="ios-pin" size={20} color="#f00" />
                        <Content description>Niteroi, RJ</Content>
                    </View>
                </View>

                <SimpleIcon>
                    <Ionicons name="heart" size={40} color="#0f0" /> 
                </SimpleIcon>
            </View>
        </FlexWrapper>
    );
};

export default Card;