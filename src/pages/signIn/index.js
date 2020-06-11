import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class SignIn extends Component {
  
  render(){
    return (
      <View style={styles.container}>
      <Image
       source={require('../../images/logo.jpg')}
       style={styles.logo}
       />
       <TextInput style={styles.input} placeholder="Digite seu e-mail"/>
       <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true}/>
      <TouchableOpacity
      style={styles.botao}
      onPress={ ()=> { this.props.navigation.navigate('Main')}}>
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>
      </View>
    );

  }
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
  botao:{
    width:300,
    height:42,
    borderRadius:10,
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:"#FE486B",
  },
  textoBotao:{
    color:"white",
    fontSize:20,
    fontWeight:"bold"

  }
});
