import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

function DefaultButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={props.color == 'purple' ? styles.btnPurple : styles.btnWhite}
        onPress={props.onPress}>
        <Text style={props.color == 'purple' ? styles.txtPurple : styles.txtWhite} >{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DefaultButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
  },
  btnPurple: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#8B31B3",
  },
  btnWhite:{
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  txtPurple:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  txtWhite:{
    color: "#8B31B3",
    fontSize: 20,
    fontWeight: "bold"
  }
  
})