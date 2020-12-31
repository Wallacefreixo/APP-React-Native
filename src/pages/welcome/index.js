import React from 'react';
import SafeView from '../../components/atoms/SafeView';
import { Title, Content } from '../../components/atoms/Content/style.js';
import { CenteredWrapper } from '../../components/atoms/PageWrapper/style.js';
import { DefaultButton } from '../../components/molecules/';

function Welcome({ navigation }) {
  return (
    <SafeView colored>
      <CenteredWrapper marginTop='120px'>
        {/* <Image
              source={require('../../../images/logo.jpg')}
              style={styles.logo}
          <View style={styles.content}>
          /> */}
        <Title big>Hobbies</Title>
        <Content align='center' description padded='60px'>Conecte gostos em comuns com pessoas ao redor do mundo</Content>
        <DefaultButton colored marginBottom onPress={ () =>  navigation.navigate('SignIn')  }>Explorar</DefaultButton>
        <DefaultButton onPress={ () =>  navigation.navigate('SignUp')  }>Começar</DefaultButton>
      </CenteredWrapper>
    </SafeView>
  );
};

export default Welcome;