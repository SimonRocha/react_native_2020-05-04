import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Conversas extends React.Component {
  render() {

    return (
        <View>
          <Text>Conversas</Text>
          <Button
          title="Nova Conversa"
          onPress={() =>
            this.props.navigation.navigate('NovaConversa')
          }
        />
        </View>

    );
  }
}