import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from 'native-base'

export default class Home extends React.Component {
  render() {

    return (
      <Container>
        <View>
        <Button
          title="Tela B"
          onPress={() =>
            this.props.navigation.navigate('TelaB')
          }
        />
        <Button
          title="Home"
          onPress={() =>
            this.props.navigation.navigate('TelaHome')
          }
        />
        </View>
        </Container>
    );
  }
}