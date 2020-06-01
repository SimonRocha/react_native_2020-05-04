import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import TelaA from './screens/TelaA';
import TelaB from './screens/TelaB';
import TelaC from './screens/TelaC';
import ListExemplo from './components/ListExemplo';

import DetalheCard5 from './screens/DetalheCard5'


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListExemplo" component={ListExemplo} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TelaA" component={TelaA} />
      <Stack.Screen name="TelaB" component={TelaB} />
      <Stack.Screen name="TelaC" component={TelaC} />
      
      <Stack.Screen name="DetalheCard5" component={DetalheCard5} />
    </Stack.Navigator>
  );
}
