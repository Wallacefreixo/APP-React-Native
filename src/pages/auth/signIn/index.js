import React, { useState } from 'react';
import { connect } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';

import { modificaEmail , modificaSenha, autenticaUsuario } from '../../../actions/authActions';

import SafeView from '../../../components/SafeView';
import UserInput from '../../../components/molecules/UserInput';
import { Title, Error, Content } from '../../../components/atoms/Content/style.js';
import DefaultButton from '../../../components/DefaultButton';
import { FlexWrapper } from '../../../components/PageWrapper/style.js';
import {
  Icon,
  ForgetPassword,
  BannerCadastrar,
  ShowPass
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
        <Title>Login</Title>
        <UserInput value={props.email}
            iconSet={["ios-mail", 20, "#fff"]}
            placeholder="E-mail"
            onChangeText={email => props.modificaEmail(email)} />
        <UserInput value={props.senha}
            iconSet={["ios-lock-closed", 20, "#fff"]}
            placeholder="Senha"
            onChangeText={senha => props.modificaSenha(senha)}
            secureTextEntry={!visiblePassword ? true : false}>
            <ShowPass onPress={() => { setVisiblePassword(!visiblePassword) }}>
              <Ionicons  name={!visiblePassword ? 'ios-eye-off' : 'ios-eye'} size={20} color="#fff" /> 
            </ShowPass>
        </UserInput>
        <Error>{props.errorLogin}</Error> 
        <DefaultButton colored onPress={() => autenticar() }>Login</DefaultButton>
        <ForgetPassword onPress={() => {  }}>
          <Content description align='right'>Esqueceu sua senha?</Content>
        </ForgetPassword>
      </FlexWrapper>
      <BannerCadastrar onPress={() => { props.navigation.navigate('SignUp') }}>
        <Content description align='center'>Não tem uma conta? Cadastre-se</Content>
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