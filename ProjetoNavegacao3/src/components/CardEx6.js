import React from 'react';
import { View, Text, TouchableOpacity, Platform, TextInput, StyleSheet, Image, Dimensions } from 'react-native';
import { stylesDefault } from '../asstes/styles/default'

const width = Dimensions.get('window').width

export default class CardEx6 extends React.Component {
    

    render() {
        const color_container = this.props.color ? this.props.color : '#378a80';
        return(
            <View style={[stylesDefault.COLUMN, styles.container]}>
                <Image source={require('../asstes/images/cat.png')} 
                    style={{
                        width: width -40, 
                        height: 300, 
                        backgroundColor: '#000', 
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    }}/>

                <View style={[stylesDefault.COLUMN, styles.content_container]}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#42b043'}}>4 days ago</Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Post One</Text>
                    <Text style={{fontSize: 18, textAlign: 'center', color: '#949696', marginTop: 30}}>Esoaj oasdoa iasjdhre sadoasid soaj oasdoa iasjdhre sadoasid soaj oasdoa iasjdhre sadoasid soaj oasdoa iasjdhre sadoasid </Text>
                </View> 

                <View style={[stylesDefault.ROW, styles.footer_container]}>
                    <View style={[stylesDefault.COLUMN, {alignItems: 'center'}]}>
                        <View style={[stylesDefault.ROW]}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>7</Text>
                            <Text style={{color: '#fff'}}>m</Text>
                        </View>
                        <Text style={{fontSize: 16, color: '#fff'}}>READ</Text>
                    </View>

                    <View style={[stylesDefault.COLUMN, {alignItems: 'center'}]}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>1234</Text>
                        <Text style={{fontSize: 16, color: '#fff'}}>VIEWS</Text>
                    </View>

                    <View style={[stylesDefault.COLUMN, {alignItems: 'center'}]}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>12</Text>
                        <Text style={{fontSize: 16, color: '#fff'}}>COMMENTS</Text>
                    </View>
                </View>   
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 40,
        width: width-40,
        backgroundColor: '#fff',
        borderRadius: 30,
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
    content_container: {
        alignItems: 'center',
        padding: 20
    },
    footer_container: {
        justifyContent: 'space-around',
        backgroundColor: '#42b043',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        padding: 15,
    }
});