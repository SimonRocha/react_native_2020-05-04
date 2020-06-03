import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {

    return (
        <View>
        <Button
          title="Tabs"
          onPress={() =>
            this.props.navigation.navigate('Tabs')
          }
        />
        <Button
          title="Drawers"
          onPress={() =>
            this.props.navigation.navigate('Drawers')
          }
        />
        </View>

    );
  }
}