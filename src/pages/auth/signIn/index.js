import React from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import SafeView from '../../../components/SafeView';
import styles from './styles';
import DefaultButton from '../../../components/DefaultButton';
import { connect } from 'react-redux';
import { modificaEmail , modificaSenha, autenticaUsuario } from '../../../actions/authActions';

const SignIn = props => {

  autenticar = () =>{
    // props.navigation.navigate('Main')//VERSÃO DESENVOLVIMENTO
    const { email, senha, navigation } = props
    props.autenticaUsuario({ email, senha, navigation })
  }

  return (
    <SafeView style={styles.container}>
        {/* <Image
          source={require('../../../images/logo.jpg')}
          style={styles.logo}
        /> */}
      <View style={styles.content}>
        <Text style={styles.titulo}>HOBBIES</Text>
        <TextInput
          value={props.email} 
          style={styles.input} 
          placeholder="E-mail" 
          onChangeText={email => props.modificaEmail(email)} 
        />
        <TextInput 
          value={props.senha} 
          style={styles.input} 
          placeholder="Senha" 
          onChangeText={senha => props.modificaSenha(senha)} 
          secureTextEntry={true} 
        />
         <Text style={styles.error}>{props.errorLogin}</Text>
        <DefaultButton onPress={() => autenticar() }>Login</DefaultButton>
        <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => { props.navigation.navigate('SignUp') }}>
          <Text style={styles.textoBotaoCadastro}>Não tem login? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
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