import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { stylesDefault } from '../asstes/styles/default'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SD = stylesDefault;

export default class Teste extends React.Component {
  render() {

    return (
      <View>
          <Button
            icon={
                <Icon
                name="arrow-right"
                size={15}
                color="white"
                />
            }
            title="Button with icon component"
            />

      </View>
    );
  }
}