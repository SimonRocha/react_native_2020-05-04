import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {

    return (
      <View>
        <Button
          title="Tela C"
          onPress={() =>
            this.props.navigation.navigate('TelaC')
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