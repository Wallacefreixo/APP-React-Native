import React from 'react';

import { View,Text, StyleSheet } from 'react-native';

const Main = () => (
  <View style={styles.container}>
    <Text style={styles.title} >Meu Aplicativo</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333"
  },
  title:{
    backgroundColor: "white"
  }
});

export default Main;
