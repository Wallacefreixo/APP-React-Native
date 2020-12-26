import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Tabs from './tabs.routes';
import Welcome from './pages/welcome/';
import SignIn from './pages/auth/signIn';
import SignUp from './pages/auth/signUp';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={Tabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;