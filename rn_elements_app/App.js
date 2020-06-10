/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';


import TelaA from './src/screens/TelaA'
import TelaB from './src/screens/TelaB'
import TelaC from './src/screens/TelaC'

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="TelaA">
      <Drawer.Screen name="TelaA" component={TelaA} />
      <Drawer.Screen name="TelaB" component={TelaB} />
      <Drawer.Screen name="TelaC" component={TelaC} />
     </Drawer.Navigator>
   </NavigationContainer>

  );
};


export default App;
