import React from 'react';
import { Text, View } from 'react-native';
import SafeView from '../../components/SafeView';
import styles from './styles';

export default function Message({ navigation }) {

  return (
    <SafeView centered>
      <Text style={styles.titulo}>Message</Text>
    </SafeView>
  );
}