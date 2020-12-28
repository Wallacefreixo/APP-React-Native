import React from 'react';
import { Text, View } from 'react-native';
import SafeView from '../../components/SafeView';
import { CenteredWrapper } from '../../components/PageWrapper/style.js';
import styles from './styles';
import DefaultButton from '../../components/DefaultButton';

export default function Welcome({ navigation }) {

  return (
    <SafeView colored>
      <CenteredWrapper marginTop='120px'>
        {/* <Image
              source={require('../../../images/logo.jpg')}
              style={styles.logo}
          <View style={styles.content}>
          /> */}
        <Text style={styles.titulo}>HOBBIES</Text>
        <Text style={styles.descricao}>Conecte gostos em comuns com pessoas ao redor do mundo</Text>
        <DefaultButton colored marginBottom onPress={ () =>  navigation.navigate('SignIn')  }>EXPLORAR</DefaultButton>
        <DefaultButton onPress={ () =>  navigation.navigate('SignUp')  }>COMEÇAR</DefaultButton>
      </CenteredWrapper>
    </SafeView>
  );
}