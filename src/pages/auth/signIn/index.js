import React from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import SafeView from '../../../components/SafeView';
import styles from './styles';
import DefaultButton from '../../../components/DefaultButton';
import { connect } from 'react-redux';
import { modificaUsuario , modificaSenha } from '../../../actions/usuarioActions';

const SignIn = props => {
  return (
    <SafeView style={styles.container}>
        {/* <Image
          source={require('../../../images/logo.jpg')}
          style={styles.logo}
        /> */}
      <View style={styles.content}>
        <Text style={styles.titulo}>HOBBIES</Text>
        <TextInput
          value={props.usuario} 
          style={styles.input} 
          placeholder="Usuário" 
          onChangeText={usuario => props.modificaUsuario(usuario)} 
        />
        <TextInput 
          value={props.senha} 
          style={styles.input} 
          placeholder="Senha" 
          onChangeText={senha => props.modificaSenha(senha)} 
          secureTextEntry={true} 
        />
        <DefaultButton onPress={() => { props.navigation.navigate('Main') }}>Login</DefaultButton>
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
    usuario: state.usuarioReducer.usuario,
    senha: state.usuarioReducer.senha
  }
)

export default connect(mapStateToProps, 
  {
    modificaUsuario,
    modificaSenha
  }
)(SignIn)