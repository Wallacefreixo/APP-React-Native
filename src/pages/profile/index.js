import React from 'react';
import SafeView from '../../components/SafeView';
import { Content } from '../../components/atoms/Content/style.js';

function Profile({ navigation }) {
  return (
    <SafeView centered colored>
      <Content align='center'>Perfil</Content>
    </SafeView>
  );
};

export default Profile;