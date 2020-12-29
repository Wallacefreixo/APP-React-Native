import React from 'react';
import SafeView from '../../components/SafeView';
import { Content } from '../../components/atoms/Content/style.js';

function Message({ navigation }) {
  return (
    <SafeView centered>
      <Content align='center'>Message</Content>
    </SafeView>
  );
};

export default Message;