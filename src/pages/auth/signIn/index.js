import React from 'react';
import { Image, Text, View, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import SafeView from '../../../components/SafeView';
import styles from './styles';
import DefaultButton from '../../../components/DefaultButton';

export default function SignIn({ navigation }) {
  return (
    <SafeView style={styles.container}>
      <Image
        source={require('../../../images/logo.jpg')}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Digite seu e-mail" />
      <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
      <DefaultButton onPress={() => { navigation.navigate('Main') }}>Login</DefaultButton>
      <TouchableOpacity
        style={styles.botaoCadastro}
        onPress={() => { navigation.navigate('SignUp') }}>
        <Text style={styles.textoBotaoCadastro}>Não tem login? Cadastre-se</Text>
      </TouchableOpacity>
    </SafeView>
  );
}