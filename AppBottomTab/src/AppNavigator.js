import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Login from './screens/Login';
import Conversas from './screens/Conversas';
import NovaConversa from './screens/NovaConversa';



const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



export default function AppNavigator() {

  tabNavigator = () => {
    return  (
    <Tab.Navigator>
      <Tab.Screen name="Conversas1" component={Conversas} />
      <Tab.Screen name="Conversas2" component={Conversas} />
      <Tab.Screen name="Conversas3 " component={Conversas} />
    </Tab.Navigator>)
  }

  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Conversas" component={this.tabNavigator} />
      <Stack.Screen name="NovaConversa" component={NovaConversa} />
    </Stack.Navigator>
  );
}
