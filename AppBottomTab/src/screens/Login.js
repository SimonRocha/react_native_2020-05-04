import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { stylesDefault } from '../asstes/styles/default'

const SD = stylesDefault;

export default class Login extends React.Component {
  render() {

    return (
      <View style={[SD.bg_Cor_1, SD.COLUMN, { flex: 1, alignItems: 'center' }]}>
        <Image style={{height: 90, width: 300, marginTop: 40}} source={require('../asstes/images/logo.png')} ></Image> 

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Conversas')}>
          <View style={[SD.bg_Cor_2, {padding: 10, width: 175, marginTop: 10}]}>
            <Text style={[SD.tx_Cor_1, {fontSize: 16, fontWeight: "bold", textAlign: 'center'}]}>Sign Up</Text>
          </View> 
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Teste')}>
          <View style={[SD.bg_Cor_1, SD.bd_Cor_2, {padding: 10, width: 175, borderWidth: 1, marginTop: 10}]}>
            <Text style={[SD.tx_Cor_2, {fontSize: 16, fontWeight: "bold", textAlign: 'center'}]}>Login</Text>
          </View> 
        </TouchableOpacity>
      </View>
    );
  }
}