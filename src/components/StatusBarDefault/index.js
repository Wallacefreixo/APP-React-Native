import React from 'react';
import { StatusBar } from 'react-native';


export default function StatusBarDefault(props) {
  return (
    <StatusBar 
      animated={true} 
      barStyle={props.lightBar ? 'light-content' : 'dark-content'} 
      backgroundColor={props.lightBar ? 'black' : 'white'} 
    />
  );
}