import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

function DefaultButton(props) {
  console.log(props)
  return (
    <View style={[styles.container, props.marginBottom == 'true' ? styles.marginBottom : '' ]}>
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
  },
  btnPurple: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#4898DD",
  },
  btnWhite:{
    flex: 1,
    borderRadius: 50,
    height: 50,
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
    color: "#4898DD",
    fontSize: 20,
    fontWeight: "bold"
  },
  marginBottom: {
    marginBottom: 20,
  },
  
})