import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SafeView from '../../components/SafeView';
import styles from './styles';

export default function Feed({ navigation }) {

  return (
    <SafeView style={styles.container}>
       <TouchableOpacity
        style={styles.icon}
        onPress={() => { navigation.navigate('Welcome') }}>
        <Text style={styles.titulo}>CLIQUE PARA SAIR</Text>
      </TouchableOpacity>
    </SafeView>
  );
}
