import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

function SafeView(props) {
  return (
    <SafeAreaView style={[{ flex: 1 }, props.style]}>
      {props.children}
    </SafeAreaView>
  );
}

export default SafeView;