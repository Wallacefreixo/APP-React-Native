import React from 'react';
import { StyleSheet, Text, View,Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function SignOut({ navigation }) {
    return (
      <View style={styles.container}>
          <TextInput style={styles.input} placeholder="Digite seu nome"/>
          <TextInput style={styles.input} placeholder="Digite seu genero"/>
          <TextInput style={styles.input} placeholder="Digite sua idade"/>
       <TextInput style={styles.input} placeholder="Digite seu e-mail"/>
       <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true}/>
      <TouchableOpacity
      style={styles.botaoCadastro}
      onPress={ ()=> { navigation.navigate('SignIn')}}>
        <Text style={styles.textoBotaoCadastro}>Cadastrar</Text>
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
  input:{
    width:300,
    borderRadius:10,
    marginBottom:10,
    padding:15,
    color:"#FE486B",
    backgroundColor: "#E7E7E8",
    fontSize:16,
  },
  botaoCadastro:{
    width:300,
    height:42,
    borderRadius:10,
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:"#FE486B",
  },
  textoBotaoCadastro:{
    color:"white",
    fontSize:20,
    fontWeight:"bold"

  }
});
