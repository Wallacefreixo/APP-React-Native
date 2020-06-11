import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from "react";

import SignIn from './pages/signIn';
import SignOut from './pages/signOut';
import Feed from './pages/feed';
import Profile from './pages/profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () =>{
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn}  options={{title: "Login"}} />
        <Stack.Screen name="SignOut" component={SignOut}  options={{title: "Cadastro"}} />
        <Stack.Screen name="Main" component={tabs}  options={{title: "Tinder"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const tabs = () =>{
    return(
        <Tab.Navigator>
          <Tab.Screen name="Feed" component={Feed} options={{title: "Feed"}} />
          <Tab.Screen name="Profile" component={Profile} options={{title: "Perfil"}}/>
        </Tab.Navigator>
    )
}
export default Routes;