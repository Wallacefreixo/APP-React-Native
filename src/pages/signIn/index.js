import React from 'react';
import { StyleSheet, Text, View,Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function SignIn({ navigation }) {
    return (
      <View style={styles.container}>
      <Image
       source={require('../../images/logo.jpg')}
       style={styles.logo}
       />
       <TextInput style={styles.input} placeholder="Digite seu e-mail"/>
       <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true}/>
      <TouchableOpacity
      style={styles.botaoLogin}
      onPress={ ()=> { navigation.navigate('Main')}}>
        <Text style={styles.textoBotaoLogin}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.botaoCadastro}
      onPress={ ()=> { navigation.navigate('SignOut')}}>
        <Text style={styles.textoBotaoCadastro}>Não tem login? Cadastre-se</Text>
      </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:200,
    height:130,
    marginBottom:20
  },
  input:{
    width:300,
    borderRadius:10,
    marginBottom:10,
    padding:15,
    color:"#FE486B",
    backgroundColor: "#E7E7E8",
    fontSize:16,
  },
  botaoLogin:{
    width:300,
    height:42,
    borderRadius:10,
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:"#FE486B",
  },
  textoBotaoLogin:{
    color:"white",
    fontSize:20,
    fontWeight:"bold"

  },
  botaoCadastro:{
    width:300,
    height:42,
    borderRadius:10,
    alignItems:'center',
    justifyContent:"center",
  },
  textoBotaoCadastro:{
    color:"#333",
    fontSize:16

  }
});
