import React, { useState } from 'react';
import { connect } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';

import { modificaEmail , modificaSenha, autenticaUsuario } from '../../../actions/authActions';

import SafeView from '../../../components/SafeView';
import { Form } from '../../../components/organisms/';
import { Content } from '../../../components/atoms/Content/style.js';
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
      <Form formTitle='Login'
        fields={[
            [
              props.email,
              ["ios-mail", 20, "#fff"],
              "E-mail",
              email => props.modificaEmail(email),
              false,
              null
            ],
            [
              props.senha,
              ["ios-lock-closed", 20, "#fff"],
              "Senha",
              senha => props.modificaSenha(senha),
              !visiblePassword ? true : false,
              <ShowPass onPress={() => { setVisiblePassword(!visiblePassword) }}>
                <Ionicons name={!visiblePassword ? 'ios-eye-off' : 'ios-eye'} size={20} color="#fff" /> 
              </ShowPass>
            ]
        ]}
        errorMessage={props.errorLogin}
        submit={() => autenticar()}>
        <ForgetPassword onPress={() => {  }}>
          <Content description align='right'>Esqueceu sua senha?</Content>
        </ForgetPassword>
      </Form>
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