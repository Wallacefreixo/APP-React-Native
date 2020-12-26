import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import SafeView from '../../../components/SafeView';
import styles from './styles';
import DefaultButton from '../../../components/DefaultButton';
import { connect } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import { modificaEmail , modificaSenha, autenticaUsuario } from '../../../actions/authActions';

const SignIn = props => {

  const [visiblePassword, setVisiblePassword] = useState(false);

  autenticar = () =>{
    // props.navigation.navigate('Main')//VERSÃO DESENVOLVIMENTO
    const { email, senha, navigation } = props
    props.autenticaUsuario({ email, senha, navigation })
  }

  return (
    <SafeView style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {  props.navigation.goBack() }}>
         <Ionicons name="ios-arrow-back" size={40} color="#fff" /> 
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.titulo}>LOGIN</Text>
        <View>
          <Ionicons style={styles.iconInput} name="ios-mail" size={20} color="#fff" /> 
          <TextInput
            value={props.email} 
            style={styles.input} 
            placeholder="E-mail" 
            placeholderTextColor="#fff"
            onChangeText={email => props.modificaEmail(email)} 
          />
        </View>
        <View>
          <Ionicons style={styles.iconInput} name="ios-lock" size={20} color="#fff" /> 
          <TextInput 
            value={props.senha} 
            style={styles.input} 
            placeholder="Senha" 
            placeholderTextColor="#fff" 
            onChangeText={senha => props.modificaSenha(senha)} 
            secureTextEntry={!visiblePassword ? true : false} 
          />
          <View style={styles.iconVisiblePassword}>
            <TouchableOpacity
              onPress={() => { setVisiblePassword(!visiblePassword) }}>
              <Ionicons  name={!visiblePassword ? 'ios-eye-off' : 'ios-eye'} size={20} color="#fff" /> 
            </TouchableOpacity>
          </View>
        </View> 
        <Text style={styles.error}>{props.errorLogin}</Text> 
        <DefaultButton color="purple" onPress={() => autenticar() }>Login</DefaultButton>
        <TouchableOpacity
          style={styles.forgetPassword}
          onPress={() => {  }}>
          <Text style={styles.txtforgetPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.bannerCadastrar}
        onPress={() => { props.navigation.navigate('SignUp') }}>
        <Text style={styles.txtbannerCadastrar}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </SafeView>
  );
}

const mapStateToProps = state => (
  {
    email: state.authReducer.email,
    senha: state.authReducer.senha,
    errorLogin: state.authReducer.errorLogin
  }
)

export default connect(mapStateToProps, 
  {
    modificaEmail,
    modificaSenha,
    autenticaUsuario
  }
)(SignIn)