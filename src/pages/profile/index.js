import React from 'react';
import { Container, Titulo } from './styles';
import SafeView from '../../components/SafeView';
import { Text, View } from 'react-native';

export default function Profile({ navigation }) {

  return (
    <SafeView centered colored>
      <Text style={styles.titulo}>PERFIL</Text>
    </SafeView>
  );
}
