import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import SafeView from '../../../components/SafeView';
import styles from './styles';
import DefaultButton from '../../../components/DefaultButton';

export default function SignUp({ navigation }) {
  return (
    <SafeView style={styles.container}>
      <TextInput style={styles.input} placeholder="Digite seu nome" />
      <TextInput style={styles.input} placeholder="Digite seu genero" />
      <TextInput style={styles.input} placeholder="Digite sua idade" />
      <TextInput style={styles.input} placeholder="Digite seu e-mail" />
      <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
      <DefaultButton onPress={() => { navigation.navigate('SignIn') }}>Cadastrar</DefaultButton>
    </SafeView>
  );
}
