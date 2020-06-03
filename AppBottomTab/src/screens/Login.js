import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends React.Component {
  render() {

    return (
      <View>
      <Text>Login</Text>
      <Button
          title="CONVERSAS"
          onPress={() =>
            this.props.navigation.navigate('Conversas')
          }
        />
    </View>
    );
  }
}