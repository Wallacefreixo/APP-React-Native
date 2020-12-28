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

import { Icon, Input, IconInput, IconVisiblePassword, Error, HaveAccount, TxtHaveAccount } from './style.js';

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
        <View>
          <IconInput name="ios-person" size={20} color="#fff" /> 
          <Input value={props.nome}  
                onChangeText={nome => props.modificaNome(nome)} 
                placeholder="Nome" 
                placeholderTextColor="#fff" />
        </View>
        
        <View>
          <IconInput name="ios-mail" size={20} color="#fff" /> 
          <Input value={props.email} 
            placeholder="E-mail" 
            placeholderTextColor="#fff"
            onChangeText={email => props.modificaEmail(email)} 
          />
        </View>
        <View>
          <IconInput name="ios-lock" size={20} color="#fff" /> 
          <Input value={props.senha} 
            placeholder="Senha" 
            placeholderTextColor="#fff" 
            onChangeText={senha => props.modificaSenha(senha)} 
            secureTextEntry={!visiblePassword ? true : false} 
          />
          <IconVisiblePassword>
            <TouchableOpacity onPress={() => { setVisiblePassword(!visiblePassword) }}>
              <Ionicons  name={!visiblePassword ? 'ios-eye-off' : 'ios-eye'} size={20} color="#fff" /> 
            </TouchableOpacity>
          </IconVisiblePassword>
        </View> 
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