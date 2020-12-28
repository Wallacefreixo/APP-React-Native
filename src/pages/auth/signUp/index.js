import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import SafeView from '../../../components/SafeView';
import styles from './styles';
import DefaultButton from '../../../components/DefaultButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { connect } from 'react-redux';
import { 
      modificaNome, 
      modificaEmail, 
      modificaSenha,
      cadastraUsuario
} from '../../../actions/authActions';

const SignUp = props => {

  const [visiblePassword, setVisiblePassword] = useState(false);

  cadastrar = () => {
    const { nome, email, senha, navigation } = props
    props.cadastraUsuario({ nome, email, senha, navigation})
  };

  return (
    <SafeView colored>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => { props.navigation.goBack() }}>
        <Ionicons name="ios-arrow-back" size={40} color="#fff" /> 
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.titulo}>CADASTRAR</Text>
        <View>
          <Ionicons style={styles.iconInput} name="ios-person" size={20} color="#fff" /> 
          <TextInput 
                value={props.nome} 
                style={styles.input} 
                onChangeText={nome => props.modificaNome(nome)} 
                placeholder="Nome" 
                placeholderTextColor="#fff"
              />
        </View>
        
        <View>
          <Ionicons style={styles.iconInput} name="ios-mail" size={20} color="#fff" /> 
          <TextInput
            value={props.email} 
            style={styles.input} 
            placeholder="E-mail" 
            placeholderTextColor="#fff"
            onChangeText={email => props.modificaEmail(email)} 
          />
        </View>
        <View>
          <Ionicons style={styles.iconInput} name="ios-lock" size={20} color="#fff" /> 
          <TextInput 
            value={props.senha} 
            style={styles.input} 
            placeholder="Senha" 
            placeholderTextColor="#fff" 
            onChangeText={senha => props.modificaSenha(senha)} 
            secureTextEntry={!visiblePassword ? true : false} 
          />
          <View style={styles.iconVisiblePassword}>
            <TouchableOpacity
              onPress={() => { setVisiblePassword(!visiblePassword) }}>
              <Ionicons  name={!visiblePassword ? 'ios-eye-off' : 'ios-eye'} size={20} color="#fff" /> 
            </TouchableOpacity>
          </View>
        </View> 
        <Text style={styles.error}>{props.errorCadastro}</Text> 
        <DefaultButton colored onPress={ () => cadastrar() }>Cadastrar</DefaultButton>
        <TouchableOpacity
          style={styles.haveAccount}
          onPress={() => { props.navigation.navigate('SignIn') }}>
          <Text style={styles.txthaveAccount}>Já tem uma conta?</Text>
        </TouchableOpacity>
      </View>
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