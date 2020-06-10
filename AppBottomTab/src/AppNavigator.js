import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Login from './screens/Login';
import Conversas from './screens/Conversas';
import NovaConversa from './screens/NovaConversa';
import Teste from './screens/Teste';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import AntDesign from 'react-native-vector-icons/AntDesign'; 

import { stylesDefault, Cor_1 } from './asstes/styles/default'

const SD = stylesDefault;

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



export default function AppNavigator() {

  tabNavigator = () => {
    return  (
    <Tab.Navigator activeColor={'#fff'}>
      <Tab.Screen name="Conversas1" component={Conversas} 
      options={{
        tabBarLabel: 'Home',
        tabBarColor: Cor_1,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Conversas2" component={Conversas} 
      options={{
        tabBarLabel: 'Home',
        tabBarColor: Cor_1,
        tabBarIcon: ({ color }) => (
          <AntDesign name="left" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Conversas3 " component={Conversas} 
      options={{
        tabBarLabel: 'Home',
        tabBarColor: Cor_1,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Conversas4 " component={Conversas} options={{
        tabBarLabel: 'Home',
        tabBarColor: Cor_1,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />

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
      <Stack.Screen name="Teste" component={Teste} />

    </Stack.Navigator>
  );
}
