import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Tela1 from './screens/Tela1';
import Tela2 from './screens/Tela2'; 
import Tela3 from './screens/Tela3';

const Stack = createStackNavigator();

export default function AppNavigator() {

  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Tela1" component={Tela1} />
      <Stack.Screen name="Tela2" component={Tela2} />
      <Stack.Screen name="Tela3" component={Tela3} />
    </Stack.Navigator>
  );
}
