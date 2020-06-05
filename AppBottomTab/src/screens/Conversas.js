import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TextInput, FlatList, TouchableOpacity } from 'react-native';

import { stylesDefault } from '../asstes/styles/default'

const SD = stylesDefault;
const width = Dimensions.get('window').width

export default class Conversas extends React.Component {
  state = {
    conversas: [
      { 
        id: 1,
        contact_image_url: '',
        contact_name: 'Simon',
        contact_last_massage: 'Asd oasdpa [asdpoa poasd.',
        contact_last_message_date: '12 abr 2020'
      },
      { 
        id: 2,
        contact_image_url: '',
        contact_name: 'Simon',
        contact_last_massage: 'Asd oasdpa [asdpoa poasd.',
        contact_last_message_date: '12 abr 2020'
      }
    ]
  }

  itemList = ({item}) => {
    return (
      <View style={[SD.ROW, {justifyContent: "space-between", padding: 10, alignItems: "center"}]}>
        <Image style={[{width: 50, height: 50, borderRadius: 30}]} source={require('../asstes/images/logo_small.png')}></Image>
        <View style={[SD.COLUMN, {flex: 1, padding: 10}]}>
          <View style={[SD.ROW, {justifyContent: "space-between"}]}>
            <Text style={[SD.tx_Cor_4, {fontSize: 18, fontWeight: 'bold'}]}>Jorge Jesus</Text>
            <Text style={[SD.tx_Cor_3, {fontSize: 12, marginRight: 10}]}>12/12/2019</Text>
          </View>
          <Text style={[SD.tx_Cor_4, {marginTop: 5, fontSize: 15}]}>Mensagem bacana, super incrivel.</Text>
        </View>
        <Text style={[SD.tx_Cor_3, {fontSize: 22}]}>></Text>
      </View>
    )
  }

  render() {
    return (
        <View style={[SD.COLUMN]}>
          
          <View style={[SD.ROW, SD.bg_Cor_1, {height: 60, width: width, alignItems: "center", justifyContent: "space-between"}]}>
            <View style={{marginLeft: 20}}></View>
            <Image style={{ height: 40, width: 40}} source={require('../asstes/images/logo_small.png')}></Image>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('NovaConversa')}>
              <Text style={[SD.tx_Cor_2, {fontSize: 30, marginRight: 20}]}>+</Text>
            </TouchableOpacity>
          </View>
          
          <TextInput onChange={(text) => this.props.navigation.navigate('NovaConversa', { texto: text }) } placeholder={"Search for your contacts"} style={[SD.bd_Cor_3, SD.tx_Cor_3, {textAlign: "center", borderWidth: 5, height: 50, width: width}]}></TextInput>

          <FlatList
            data={this.state.conversas}
            renderItem={this.itemList}
            keyExtractor={item => item.id}
          />

        </View>

    );
  }
}