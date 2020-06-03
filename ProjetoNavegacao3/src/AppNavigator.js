import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/Home';
import TelaA from './screens/TelaA';
import TelaB from './screens/TelaB';
import TelaC from './screens/TelaC';
import TelaHome from './screens/TelaHome';
import ListExemplo from './components/ListExemplo';

import DetalheCard5 from './screens/DetalheCard5'


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();



export default function AppNavigator() {

  tabNavigator = () => {
    return  (
    <Tab.Navigator>
      <Tab.Screen name="TelaA" component={TelaA} />
      <Tab.Screen name="TelaB" component={TelaB} />
      <Tab.Screen name="TelaC " component={TelaC} />
    </Tab.Navigator>)
  }

  drawerNavigator = () => {
    return  (
    <Drawer.Navigator>
      <Drawer.Screen name="TelaA" component={TelaA} />
      <Drawer.Screen name="TelaB" component={TelaB} />
      <Drawer.Screen name="TelaC " component={TelaC} />
    </Drawer.Navigator>)
  }

  return (
    <Stack.Navigator >
      <Stack.Screen name="TelaHome" component={TelaHome} />

      <Stack.Screen name="Tabs" component={this.tabNavigator} />
      <Stack.Screen name="Drawers" component={this.drawerNavigator} />
    </Stack.Navigator>
  );
}
