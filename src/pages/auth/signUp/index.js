import React, {useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { connect } from 'react-redux';;

import { modificaNome, modificaEmail, modificaSenha, cadastraUsuario } from '../../../actions/authActions';

import SafeView from '../../../components/atoms/SafeView';
import { Content } from '../../../components/atoms/Content/style.js';
import { Form } from '../../../components/organisms/';
import {
  SimpleIcon,
  SimpleText,
  ShowPass
} from '../../../components/molecules/DefaultButton/style'

const SignUp = props => {

  const [visiblePassword, setVisiblePassword] = useState(false);

  const cadastrar = () => {
    const { nome, email, senha, navigation } = props
    props.cadastraUsuario({ nome, email, senha, navigation})
  };

  return (
    <SafeView colored>
      <SimpleIcon onPress={() => { props.navigation.goBack() }}>
        <Ionicons name="ios-arrow-back" size={40} color="#fff" /> 
      </SimpleIcon>
      <Form formTitle='Cadastrar'
        fields={[
            [
              props.nome,
              ["ios-person", 20, "#fff"],
              "Nome",
              nome => props.modificaNome(nome),
              false,
              null
            ],
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
        errorMessage={props.errorCadastro}
        submit={() => cadastrar()}>
        <SimpleText onPress={() => { props.navigation.navigate('SignIn') }}>
          <Content description align='right'>Já tem uma conta?</Content>
        </SimpleText>
      </Form>
    </SafeView>
  );
}

const mapStateToProps = state => (
  {
    nome: state.authReducer.nome,
    email: state.authReducer.email,
    senha: state.authReducer.senha,
    errorCadastro: state.authReducer.errorCadastro
  }
)

export default connect(mapStateToProps, 
  {
  modificaNome, 
  modificaEmail,
  modificaSenha,
  cadastraUsuario 
  }
)(SignUp)