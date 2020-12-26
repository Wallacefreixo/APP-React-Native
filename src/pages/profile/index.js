import React from 'react';
import { Container, Titulo } from './styles';

export default function Profile({ navigation }) {

  return (
    <SafeView style={styles.container}>
      <Text style={styles.titulo}>PERFIL</Text>
    </SafeView>
  );
}
