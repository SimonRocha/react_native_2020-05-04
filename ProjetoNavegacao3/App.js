import React from 'react';
import AppNavigator from './src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
    constructor() {
      super()
    }

  render() {
    return (
      <NavigationContainer><AppNavigator/></NavigationContainer>
    );
  }
}