import React from 'react';
import { View, Text, TouchableOpacity, Platform, TextInput, StyleSheet, Image, Dimensions } from 'react-native';
import { stylesDefault } from '../asstes/styles/default';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Imagem extends React.Component {

    render() {
        return (
            <View style={stylesDefault.ROW}>
                <View style={{backgroundColor: '#000' }}>
                    <Image source={ require('../asstes/images/cat.png')} style={{ 
                        width: width*0.6, 
                        height: height*0.5,
                        resizeMode: 'stretch' }}/>
                </View>
                <View style={{backgroundColor: '#000', }}>
                    <Image source={ require('../asstes/images/cat.png')} style={{ 
                        width: width*0.6, 
                        height: height*0.5,
                        resizeMode: 'stretch' }}/>
                </View>
                <View style={{backgroundColor: '#000', }}>
                    <Image source={ require('../asstes/images/cat.png')} style={{ 
                        width: width*0.6, 
                        height: height*0.5,
                        resizeMode: 'stretch' }}/>
                </View>
            </View>
        );
    }
}