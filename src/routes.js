import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

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