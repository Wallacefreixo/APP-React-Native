import React from 'react';
import SafeView from '../../components/atoms/SafeView';
import { DefaultButton } from '../../components/molecules/';

function Feed({ navigation }) {
  return (
    <SafeView centered>
      <DefaultButton onPress={() => { navigation.navigate('Welcome') }}>
        Clique para sair
      </DefaultButton>
    </SafeView>
  );
};

export default Feed;