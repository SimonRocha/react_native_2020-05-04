import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {

    return (
      <View>
        <Button
          title="Tela A"
          onPress={() =>
            this.props.navigation.navigate('TelaA')
          }
        />
        <Button
        title="Home"
        onPress={() =>
          this.props.navigation.navigate('Home')
        }
      />
      </View>


    );
  }
}