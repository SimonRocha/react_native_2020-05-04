/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ListarUsuarios from './src/screens/ListarUsuarios'
import DetalheUsuario from './src/screens/DetalheUsuario'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de usuários" component={ListarUsuarios} />
        <Stack.Screen name="Detalhe do usuário" component={DetalheUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
