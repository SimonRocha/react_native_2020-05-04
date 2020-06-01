import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './screens/Home';
import TelaA from './screens/TelaA';
import TelaB from './screens/TelaB';
import TelaC from './screens/TelaC';
import ListExemplo from './components/ListExemplo';

import DetalheCard5 from './screens/DetalheCard5'


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator 
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ListExemplo" component={ListExemplo} />
      <Tab.Screen name="TelaA" component={TelaA} />
      <Tab.Screen name="TelaB" component={TelaB} />
      <Tab.Screen name="TelaC" component={TelaC} />
      
    </Tab.Navigator>
  );
}
