/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import Card from './src/components/Card'
import IMC from './src/components/IMC'
import CardEx5 from './src/components/CardEx5'
import ListCardEx5 from './src/components/ListCardEx5'


import {
  Header,
  LearnMoreLinks, 
  Colors, 
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  let cursos = [
    {
      time: "15:00",
      title: "6 places elements places elements places elements ",
      user_name:"John",
      color: "#f4f"
    },
    {
      time: "15:30",
      title: "Ultimate test",
      user_name:"Carl",
      color: "#f4f"
    },
    {
      time: "16:00",
      title: "Using React Native",
      user_name:"Simon",
    }
  ]

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <ScrollView>
        <ListCardEx5 data={cursos} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
