import React, {useState} from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { connect } from 'react-redux';;

import { modificaNome, modificaEmail, modificaSenha, cadastraUsuario } from '../../../actions/authActions';

import SafeView from '../../../components/SafeView';
import { Title } from '../../../components/Content/style.js';
import DefaultButton from '../../../components/DefaultButton';
import { FlexWrapper } from '../../../components/PageWrapper/style.js';
import UserInput from '../../../components/UserInput';

import { Icon, Input, IconInput, IconVisiblePassword, Error, HaveAccount, TxtHaveAccount } from '../../../components/SignUp/style.js';

const SignUp = props => {

  const [visiblePassword, setVisiblePassword] = useState(false);

  cadastrar = () => {
    const { nome, email, senha, navigation } = props
    props.cadastraUsuario({ nome, email, senha, navigation})
  };

  return (
    <SafeView colored>
      <Icon onPress={() => { props.navigation.goBack() }}>
        <Ionicons name="ios-arrow-back" size={40} color="#fff" /> 
      </Icon>
      <FlexWrapper marginTop='40px'>
        <Title>CADASTRAR</Title>
        <UserInput value={props.email}
            iconSet={["ios-person", 20, "#fff"]}
            placeholder="Nome"
            onChangeText={nome => props.modificaNome(nome)} />
        
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
        <Error>{props.errorCadastro}</Error> 
        <DefaultButton colored onPress={ () => cadastrar() }>Cadastrar</DefaultButton>
        <HaveAccount onPress={() => { props.navigation.navigate('SignIn') }}>
          <TxtHaveAccount>Já tem uma conta?</TxtHaveAccount>
        </HaveAccount>
      </FlexWrapper>
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