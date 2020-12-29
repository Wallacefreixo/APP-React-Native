import React from 'react';
import SafeView from '../../components/SafeView';
import DefaultButton from '../../components/DefaultButton';

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