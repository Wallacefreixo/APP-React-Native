import React from 'react';
import { StyleSheet, Text, View,Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


clicou = () =>{
  Alert.alert("logou")
}
export default function App() {
  return (
    <View style={styles.container}>
    <Text>HOME: Meu Aplicativo </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }

});
