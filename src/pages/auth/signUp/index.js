import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SafeView from '../../../components/SafeView';
import styles from './styles';
import DefaultButton from '../../../components/DefaultButton';
import { connect } from 'react-redux';
import { 
      modificaNome, 
      modificaEmail, 
      modificaSenha,
      cadastraUsuario
} from '../../../actions/authActions';

const SignUp = props => {

  cadastrar = () => {
    const { nome, email, senha, navigation } = props
    props.cadastraUsuario({ nome, email, senha, navigation})
  };

  return (
    <SafeView style={styles.container}>
      <View style={styles.content}>
          <TextInput 
            value={props.nome} 
            style={styles.input} 
            onChangeText={nome => props.modificaNome(nome)} 
            placeholder="Nome" 
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
         <DefaultButton onPress={ () => cadastrar() }>Cadastrar</DefaultButton>
      </View>
      {/* <DefaultButton onPress={() => { props.navigation.navigate('SignIn') }}>Cadastrar</DefaultButton> */}
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