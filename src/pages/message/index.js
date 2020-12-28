import React from 'react';
import SafeView from '../../components/SafeView';
import { Content } from '../../components/Content/style.js';

function Message({ navigation }) {
  return (
    <SafeView centered>
      <Content>Message</Content>
    </SafeView>
  );
};

export default Message;