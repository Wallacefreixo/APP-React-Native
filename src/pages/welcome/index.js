import React from 'react';
import SafeView from '../../components/SafeView';
import { Title, Description} from '../../components/Content/style.js';
import { CenteredWrapper } from '../../components/PageWrapper/style.js';
import DefaultButton from '../../components/DefaultButton';

function Welcome({ navigation }) {
  return (
    <SafeView colored>
      <CenteredWrapper marginTop='120px'>
        {/* <Image
              source={require('../../../images/logo.jpg')}
              style={styles.logo}
          <View style={styles.content}>
          /> */}
        <Title>HOBBIES</Title>
        <Description>Conecte gostos em comuns com pessoas ao redor do mundo</Description>
        <DefaultButton colored marginBottom onPress={ () =>  navigation.navigate('SignIn')  }>EXPLORAR</DefaultButton>
        <DefaultButton onPress={ () =>  navigation.navigate('SignUp')  }>COMEÇAR</DefaultButton>
      </CenteredWrapper>
    </SafeView>
  );
};

export default Welcome;