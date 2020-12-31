import React, { useState } from 'react';
import { connect } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';

import { modificaEmail , modificaSenha, autenticaUsuario } from '../../../actions/authActions';

import SafeView from '../../../components/atoms/SafeView';
import { Form } from '../../../components/organisms/';
import { Content } from '../../../components/atoms/Content/style.js';
import {
  SimpleIcon,
  SimpleText,
  FullBox,
  ShowPass
} from '../../../components/molecules/DefaultButton/style'

const SignIn = props => {

  const [visiblePassword, setVisiblePassword] = useState(false);

  const autenticar = () => {
    props.navigation.navigate('Main') // VERSÃO DESENVOLVIMENTO
    // const { email, senha, navigation } = props
    // props.autenticaUsuario({ email, senha, navigation })
  }
  
  return (
    <SafeView colored>
      <SimpleIcon onPress={() => {  props.navigation.goBack() }}>
         <Ionicons name="ios-arrow-back" size={40} color="#fff" /> 
      </SimpleIcon>
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
        <SimpleText onPress={() => {  }}>
          <Content description align='right'>Esqueceu sua senha?</Content>
        </SimpleText>
      </Form>
      <FullBox onPress={() => { props.navigation.navigate('SignUp') }}>
        <Content description align='center'>Não tem uma conta? Cadastre-se</Content>
      </FullBox>
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