import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

import { modificaEmail , modificaSenha, autenticaUsuario } from '../../../actions/authActions';

import SafeView from '../../../components/SafeView';
import UserInput from '../../../components/UserInput';
import { Title } from '../../../components/Content/style.js';
import DefaultButton from '../../../components/DefaultButton';
import { FlexWrapper } from '../../../components/PageWrapper/style.js';
import {
  Input,
  IconInput,
  IconVisiblePassword,
  Icon,
  ForgetPassword,
  BannerCadastrar,
  TxtForgetPassword,
  TxtBannerCadastrar,
  Error
} from '../../../components/SignIn/style.js'

const SignIn = props => {

  const [visiblePassword, setVisiblePassword] = useState(false);

  autenticar = () =>{
    props.navigation.navigate('Main') // VERSÃO DESENVOLVIMENTO
    // const { email, senha, navigation } = props
    // props.autenticaUsuario({ email, senha, navigation })
  }
  
  return (
    <SafeView colored>
      <Icon onPress={() => {  props.navigation.goBack() }}>
         <Ionicons name="ios-arrow-back" size={40} color="#fff" /> 
      </Icon>
      <FlexWrapper marginTop='40px'>
        <Title>LOGIN</Title>
        <UserInput value={props.email}
            iconSet={["ios-mail", 20, "#fff"]}
            placeholder="E-mail"
            onChangeText={email => props.modificaEmail(email)} />
        <UserInput value={props.email}
            iconSet={["ios-lock-closed", 20, "#fff"]}
            placeholder="Senha"
            onChangeText={senha => props.modificaSenha(senha)}>
            <IconVisiblePassword>
              <TouchableOpacity onPress={() => { setVisiblePassword(!visiblePassword) }}>
                <Ionicons  name={!visiblePassword ? 'ios-eye-off' : 'ios-eye'} size={20} color="#fff" /> 
              </TouchableOpacity>
            </IconVisiblePassword>
        </UserInput>
        <Error>{props.errorLogin}</Error> 
        <DefaultButton colored onPress={() => autenticar() }>Login</DefaultButton>
        <ForgetPassword onPress={() => {  }}>
          <TxtForgetPassword>Esqueceu sua senha?</TxtForgetPassword>
        </ForgetPassword>
      </FlexWrapper>
      <BannerCadastrar onPress={() => { props.navigation.navigate('SignUp') }}>
        <TxtBannerCadastrar>Não tem uma conta? Cadastre-se</TxtBannerCadastrar>
      </BannerCadastrar>
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