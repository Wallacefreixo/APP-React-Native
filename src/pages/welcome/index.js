import React from 'react';
import { Text, View } from 'react-native';
import SafeView from '../../components/SafeView';
import styles from './styles';

export default function Welcome({ navigation }) {

  return (
    <SafeView style={styles.container}>
         {/* <Image
          source={require('../../../images/logo.jpg')}
          style={styles.logo}
        /> */}
      <Text style={styles.titulo}>WELCOME </Text>
    </SafeView>
  );
}