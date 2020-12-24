import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SafeView from '../../../components/SafeView';
import styles from './styles';
import DefaultButton from '../../../components/DefaultButton';
import { connect } from 'react-redux';
import { 
      modificaUsuario, 
      modificaEmail, 
      modificaSenha,
      cadastraUsuario
} from '../../../actions/usuarioActions';

const SignUp = props => {

  cadastrar = () => {
    const { usuario, email, senha, navigation } = props
    props.cadastraUsuario({ usuario, email, senha, navigation})
  };

  return (
    <SafeView style={styles.container}>
      <View style={styles.content}>
          <TextInput 
            value={props.usuario} 
            style={styles.input} 
            onChangeText={usuario => props.modificaUsuario(usuario)} 
            placeholder="Usuário" 
          />
          <TextInput 
            value={props.email} 
            style={styles.input} 
            onChangeText={email => props.modificaEmail(email)} 
            placeholder="E-mail" 
          />
          <TextInput 
            value={props.senha} 
            style={styles.input} 
            onChangeText={senha => props.modificaSenha(senha)} 
            placeholder="Senha" secureTextEntry={true}
          />
         <Text style={styles.error} >{props.errorCadastro}</Text>
         <DefaultButton onPress={() => { cadastrar() }}>Cadastrar</DefaultButton>
      </View>
      {/* <DefaultButton onPress={() => { props.navigation.navigate('SignIn') }}>Cadastrar</DefaultButton> */}
    </SafeView>
  );
}

const mapStateToProps = state => (
  {
    usuario: state.usuarioReducer.usuario,
    email: state.usuarioReducer.email,
    senha: state.usuarioReducer.senha,
    errorCadastro: state.usuarioReducer.errorCadastro
  }
)

export default connect(mapStateToProps, 
  {
  modificaUsuario, 
  modificaEmail,
  modificaSenha,
  cadastraUsuario 
  }
)(SignUp)