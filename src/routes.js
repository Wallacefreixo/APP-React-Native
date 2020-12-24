import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import IconWithBadge from './components/IconWithBadge';
import React from "react";

import Tabs from "./tabs.routes";
import SignIn from './pages/auth/signIn';
import SignUp from './pages/auth/signUp';
import Feed from './pages/feed';
import Profile from './pages/profile';

const Stack = createStackNavigator();


const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: "Login" }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: "Cadastro" }} />
        <Stack.Screen name="Main" component={Tabs} options={{ title: "Hobbies" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;