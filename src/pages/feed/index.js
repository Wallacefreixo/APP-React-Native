import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function Main({ navigation }) {

    return (
      <View style={styles.container}>
      <Text style={styles.titulo}>MEU FEED </Text>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE486B',
    alignItems: 'center',
    justifyContent:'center'
  },
  titulo: {
    fontSize:20,
    color:'white'
  }

});
