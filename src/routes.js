import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';

import SignIn from './pages/signIn';
import Main from './pages/main';

const Routes = createStackNavigator({
  SignIn:{
      screen: SignIn,
      navigationOptions:{
          header: null
      }
  },
  Main:{
    screen: Main,
      navigationOptions:{
          headerTitle: 'Main'
      }
  }
});

export default createAppContainer(Routes);