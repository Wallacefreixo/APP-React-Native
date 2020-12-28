import React from 'react';
import SafeView from '../../components/SafeView';
import { Content } from '../../components/Content/style.js';

function Profile({ navigation }) {
  return (
    <SafeView centered colored>
      <Content>PERFIL</Content>
    </SafeView>
  );
};

export default Profile;