import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './screens/Login';
import Register from './screens/Register';
import TabNavigator from './components/BottomNav';


const AppNavigator = createStackNavigator(
  {
    Login:{
      screen:Login
    },
    Register: {
      screen:Register
    },
    MainMenu: {
      screen:TabNavigator
    }

  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);