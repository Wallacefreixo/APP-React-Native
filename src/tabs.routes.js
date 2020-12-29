import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import IconWithBadge from './components/IconWithBadge';
import React from "react";

import Feed from './pages/feed';
import Message from './pages/message';
import Profile from './pages/profile';

const Tab = createBottomTabNavigator();

function FeedIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused
              ? 'md-globe'
              : 'md-globe';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          else if (route.name === 'Message') {
            iconName = focused
              ? 'ios-chatbubbles'
              : 'ios-chatbubbles';
            return <FeedIconWithBadge name={iconName} size={size} color={color} />;

          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'ios-contact' : 'ios-contact';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: '#0DD0E2',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Feed" component={Feed} options={{ title: "Feed" }} />
      <Tab.Screen name="Message" component={Message} options={{ title: "Mensagem" }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: "Perfil" }} />
    </Tab.Navigator>
  )
}

export default Tabs;