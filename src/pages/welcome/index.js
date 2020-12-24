import React from 'react';
import { Text, View } from 'react-native';
import SafeView from '../../components/SafeView';
import styles from './styles';

export default function Profile({ navigation }) {

  return (
    <SafeView style={styles.container}>
      <Text style={styles.titulo}>WELCOME</Text>
    </SafeView>
  );
}