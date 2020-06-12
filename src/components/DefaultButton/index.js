import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

function DefaultButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}>
        <Text style={styles.text}>{props.children}</Text>
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
    paddingHorizontal: 30
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#FE486B",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
})