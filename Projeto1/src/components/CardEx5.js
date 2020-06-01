import React from 'react';
import { View, Text, TouchableOpacity, Platform, TextInput, StyleSheet, Image, Dimensions } from 'react-native';
import { stylesDefault } from '../asstes/styles/default'

const width = Dimensions.get('window').width

export default class CardEx5 extends React.Component {
    render() {
        const color_left_container = this.props.color ? this.props.color : '#378a80';
        return(
            <View style={[stylesDefault.ROW, styles.container, {borderColor: color_left_container}]}>
                <View style={[stylesDefault.COLUMN, styles.letf_container, { backgroundColor: color_left_container }]}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>{this.props.time}</Text>
                </View>
                
                <View style={[stylesDefault.COLUMN, styles.right_container]}>
                    <View style={stylesDefault.ROW}>
                        <Text style={{color: color_left_container, fontWeight: 'bold', fontSize: 16}}>Title: </Text>
                        <Text style={{color: '#a1a1a1', fontWeight: 'bold', fontSize: 16, paddingRight: 145}}>{this.props.title}</Text>
                    </View>
                    
                    <View style={[stylesDefault.ROW, {marginTop: 3}]}>
                        <Image source={require('../asstes/images/marker.png')} 
                            style={{resizeMode: 'stretch', width: 16, height: 16, marginTop: 3}}/>
                        <Text style={{color: '#a1a1a1', fontSize: 16}}> in this city</Text>
                    </View>

                    <Text style={{fontSize: 16, color: '#00affa', marginTop: 3}}>3$ per hour</Text>

                    <View style={[stylesDefault.ROW, {marginTop: 3}]}>
                        <Image source={require('../asstes/images/user.png')} 
                            style={{resizeMode: 'stretch', width: 16, height: 16, marginTop: 3}}/>
                        <Text style={{color: color_left_container, fontSize: 16, marginLeft: 3}}>{this.props.user_name}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        marginTop: 10,
        width: width-10, 
        backgroundColor: '#fff',
        marginBottom: 20,
        ...Platform.select({
            ios: {
              shadowColor: '#007aff',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
            },
            android: {
              elevation: 10, 
            },
        }),
    },
    letf_container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70
    },
    right_container: {
        padding: 10
    }
});